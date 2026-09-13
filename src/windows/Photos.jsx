import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window";
import WindowWrapper from "#hoc/WindowWrapper";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Photos = () => {
  const isOpen = useWindowStore((state) => state.windows.photos.isOpen);
  const [activeId, setActiveId] = useState(photosLinks[0].id);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const visiblePhotos =
    activeId === photosLinks[0].id
      ? gallery
      : gallery.filter((item) => item.category === activeId);

  const lightboxOpen = isOpen && selectedIndex !== null;

  const selectCategory = (id) => {
    setActiveId(id);
    setSelectedIndex(null);
  };

  const closeLightbox = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((i) => (i - 1 + visiblePhotos.length) % visiblePhotos.length);
  const showNext = () =>
    setSelectedIndex((i) => (i + 1) % visiblePhotos.length);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, visiblePhotos.length]);

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
                onClick={() => selectCategory(id)}
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
            {visiblePhotos.map(({ id, img }, index) => (
              <li key={id} onClick={() => setSelectedIndex(index)}>
                <img src={img} alt={`Gallery item ${id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {lightboxOpen && createPortal(
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            type="button"
            className="lightbox-close"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={visiblePhotos[selectedIndex].img}
            alt={`Gallery item ${visiblePhotos[selectedIndex].id}`}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next photo"
          >
            <ChevronRight size={32} />
          </button>
        </div>,
        document.body
      )}
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
