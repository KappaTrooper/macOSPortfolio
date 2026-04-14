import { Dock, Finder, Navbar, Welcome } from "#components";
import { Resume, Safari, Terminal } from "#windows";


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

</main>
  )
}

export default App