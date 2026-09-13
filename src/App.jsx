import { CommandPalette, Dock, Finder, Navbar, Welcome } from "#components";
import { Contact, ImgFile, Photos, Resume, Safari, Terminal, TxtFile } from "#windows";
import useApplyTheme from "#hooks/useApplyTheme";
import useCommandPaletteStore from "#store/commandPalette";
import { useEffect } from "react";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  useApplyTheme();
  const toggleCommandPalette = useCommandPaletteStore((s) => s.toggle);

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