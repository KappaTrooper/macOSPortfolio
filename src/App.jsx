import { Dock, Finder, Navbar, Welcome } from "#components";
import { Contact, ImgFile, Photos, Resume, Safari, Terminal, TxtFile } from "#windows";


import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
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

</main>
  )
}

export default App