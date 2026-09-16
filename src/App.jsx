import { CommandPalette, DesktopIcon, Dock, Finder, Navbar, Welcome } from "#components";
import { Contact, ImgFile, Photos, Resume, Safari, Terminal, TxtFile } from "#windows";
import useApplyTheme from "#hooks/useApplyTheme";
import useCommandPaletteStore from "#store/commandPalette";
import useWindowStore from "#store/window";
import { useEffect } from "react";

const BASE_URL = import.meta.env.BASE_URL;

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  useApplyTheme();
  const toggleCommandPalette = useCommandPaletteStore((s) => s.toggle);
  const { openWindow } = useWindowStore();

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isModK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
      if (!isModK) return;
      e.preventDefault();
      toggleCommandPalette();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleCommandPalette]);

  return (
<main>
  <Navbar />
  <Welcome />
  <Dock />

  <DesktopIcon
    icon={`${BASE_URL}images/folder.png`}
    label="Resume"
    onClick={() => openWindow('resume')}
  />

 <Terminal />
 <Safari/>
 <Resume/>
 <Finder/>
 <Contact/>
 <Photos/>
 <TxtFile/>
 <ImgFile/>

 <CommandPalette />

</main>
  )
}

export default App