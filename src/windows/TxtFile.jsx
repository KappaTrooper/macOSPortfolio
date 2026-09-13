import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const TxtFile = () => {
  const item = useWindowStore((state) => state.windows.txtfile.data);

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{item?.name ?? "Untitled.txt"}</h2>
      </div>

      <div className="p-6 space-y-3 overflow-y-auto max-h-[60vh]">
        {item?.subtitle && (
          <h3 className="font-semibold text-lg">{item.subtitle}</h3>
        )}

        {item?.image && (
          <img
            src={item.image}
            alt={item.subtitle ?? item.name}
            className="rounded-lg w-32 h-32 object-cover"
          />
        )}

        {(item?.description ?? []).map((line, index) => (
          <p key={index} className="text-sm text-gray-700">
            {line}
          </p>
        ))}

        {!item && (
          <p className="text-sm text-gray-400">
            Open a .txt file from Finder to preview it here.
          </p>
        )}
      </div>
    </>
  );
};

const TxtFileWindow = WindowWrapper(TxtFile, "txtfile");

export default TxtFileWindow;
