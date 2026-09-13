import { navLinks, dockApps, locations, socials } from "#constants";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";
import useCommandPaletteStore from "#store/commandPalette";
import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";

const buildActions = (openWindow) => {
  const navActions = navLinks.map((l) => ({
    id: `nav-${l.id}`,
    group: "Navigate",
    label: l.name,
    onSelect: () => openWindow(l.type),
  }));

  const dockActions = dockApps
    .filter((a) => a.canOpen)
    .map((a) => ({
      id: `dock-${a.id}`,
      group: "Apps",
      label: a.name,
      onSelect: () => openWindow(a.id),
    }));

  const projectActions = locations.work.children.map((project) => ({
    id: `project-${project.id}`,
    group: "Projects",
    label: project.name,
    onSelect: () => {
      openWindow("finder");
      useLocationStore.getState().setActiveLocation(project);
    },
  }));

  const socialActions = socials
    .filter((s) => s.link)
    .map((s) => ({
      id: `social-${s.id}`,
      group: "Socials",
      label: s.text,
      onSelect: () => window.open(s.link, "_blank", "noopener,noreferrer"),
    }));

  return [...navActions, ...dockActions, ...projectActions, ...socialActions];
};

const CommandPalette = () => {
  const isOpen = useCommandPaletteStore((s) => s.isOpen);
  const close = useCommandPaletteStore((s) => s.close);
  const { openWindow } = useWindowStore();
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = useMemo(() => buildActions(openWindow), [openWindow]);
  const filtered = useMemo(
    () => actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase())),
    [actions, query]
  );

  useEffect(() => {
    if (isOpen) requestAnimationFrame(() => inputRef.current?.focus());
  }, [isOpen]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    setActiveIndex(0);
  };

  const closeAndReset = () => {
    close();
    setQuery('');
    setActiveIndex(0);
  };

  const activate = (action) => {
    action?.onSelect();
    closeAndReset();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeAndReset();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      activate(filtered[activeIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="command-palette-overlay" onClick={closeAndReset}>
      <div className="command-palette" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          value={query}
          onChange={handleQueryChange}
          onKeyDown={handleKeyDown}
          placeholder="Search actions, projects, links…"
          className="command-palette-input"
        />
        <ul className="command-palette-list">
          {filtered.length === 0 && <li className="command-palette-empty">No results</li>}
          {filtered.map((action, index) => (
            <li
              key={action.id}
              className={clsx("command-palette-item", index === activeIndex && "active")}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => activate(action)}
            >
              <span className="command-palette-group">{action.group}</span>
              <span>{action.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommandPalette;
