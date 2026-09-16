import { WindowControls } from "#components"
import { locations } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"
import useLocationStore from "#store/location"
import useWindowStore from "#store/window"
import clsx from "clsx"
import { Search } from "lucide-react"
import { useEffect } from "react"

const Finder = () => {

    const {openWindow} = useWindowStore();
    const isOpen = useWindowStore((s) => s.windows.finder.isOpen);

    const { activeLocation, setActiveLocation, resetActiveLocation } = useLocationStore();

    useEffect(() => {
        if (!isOpen) resetActiveLocation();
    }, [isOpen, resetActiveLocation]);

    const openItem = (item) => {
        if (item.fileType === "pdf") return openWindow("resume");
        if (item.fileType === "txt") return openWindow("txtfile", item);
        if (item.fileType === "img") return openWindow("imgfile", item);
        if (item.kind === "folder") return setActiveLocation(item);
        if (["fig", "url"].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank", "noopener,noreferrer");
    };

    const renderList = (name, items) => (
        
        <div>
                        <h3>{name}</h3>
        
        <ul>
        {items.map((item) => (
                                <li key={item.id} 
                                onClick={() => setActiveLocation(item)} 
                                 className={clsx(
        item.id === activeLocation.id ? "active" : "not-active",
    )}
                                >
                                    <img src={item.icon} className="w-4" alt={item.name}  />
                                    <p className="text-sm font-medium truncate">{item.name}</p>
                                </li>
                            ))}
                            </ul>
                            </div>

                            );


    return (
        <>
            <div id="window-header"> 
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>

            <div className="bg-surface flex h-full">
                <div className="sidebar">
                    
                       
                            {renderList('Favorites',Object.values(locations))}
    

                            {renderList('Work',locations.work.children)}
                    
                </div>


                            <ul className="content">
            {activeLocation?.children.map((item) => (
                <li key={item.id}
                onClick={() => openItem(item)}

                >
                <img src={item.icon} alt={item.name}/>
                <p>{item.name}</p>

                </li>
            ))}

            </ul>
            </div>


        </>
    )
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;