import { useEffect, useRef } from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import clsx from "clsx";
import useThemeStore from "#store/theme";

const OPTIONS = [
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
  { id: "system", label: "System", icon: Laptop },
];

const AppearanceMenu = ({ open, onClose }) => {
  const mode = useThemeStore((state) => state.mode);
  const setMode = useThemeStore((state) => state.setMode);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div ref={ref} className="appearance-menu">
      {OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          className={clsx("appearance-menu-item", mode === option.id && "active")}
          onClick={() => {
            setMode(option.id);
            onClose();
          }}
        >
          <option.icon className="w-4" />
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
};

export default AppearanceMenu;
