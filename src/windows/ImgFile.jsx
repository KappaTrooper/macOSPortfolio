import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const ImgFile = () => {
  const item = useWindowStore((state) => state.windows.imgfile.data);

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p>{item?.name ?? "Untitled"}</p>
      </div>

      <div className="preview">
        {item?.imageUrl && <img src={item.imageUrl} alt={item.name} />}
      </div>
    </>
  );
};

const ImgFileWindow = WindowWrapper(ImgFile, "imgfile");

export default ImgFileWindow;
