import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import clsx from "clsx";
import { useState } from "react";

const Photos = () => {
  const [activeId, setActiveId] = useState(photosLinks[0].id);

  const visiblePhotos =
    activeId === photosLinks[0].id
      ? gallery
      : gallery.filter((item) => item.category === activeId);

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>

      <div className="flex h-full">
        <div className="sidebar">
          <h2>Library</h2>
          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li
                key={id}
                onClick={() => setActiveId(id)}
                className={clsx(id === activeId ? "active" : "not-active")}
              >
                <img src={icon} className="w-4" alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {visiblePhotos.map(({ id, img }) => (
              <li key={id}>
                <img src={img} alt={`Gallery item ${id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
