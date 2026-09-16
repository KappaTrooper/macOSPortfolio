import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import { ChevronLeft, ChevronRight, Copy, Newspaper, PanelLeft, Plus, Search, Share, ShieldHalf } from "lucide-react";


const Safari = () => {
  return <>
    <div id="window-header">
        <WindowControls  target="safari"/>
        <PanelLeft className="ml-10 icon max-sm:hidden"/>
        <div className="flex items-center gap-1 ml-5 max-sm:hidden">
            <ChevronLeft className="icon" />
            <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
            <ShieldHalf className="icon max-sm:hidden" />
            <div className="search">
                <Search className="icon"/>
                <input type="text" placeholder="Search or enter website name" className="flex-1"/>
            </div>
        </div>

        <div className="flex items-center gap-5 max-sm:hidden">
        <Share className="icon" />
        <Plus className="icon" />
        <Copy className="icon" />

        </div>


       
    </div>
     <div className="blog">
            <div className="coming-soon">
                <Newspaper size={40} />
                <h2>Coming Soon</h2>
                <p>I'm working on some posts — check back soon!</p>
            </div>
        </div>
  </>
}

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow
