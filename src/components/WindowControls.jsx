import useWindowStore from "#store/window"


const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <button type="button" className="control-hit" aria-label="Close" onClick={() => closeWindow(target)}>
        <span className="close" />
      </button>
      <button type="button" className="control-hit" aria-label="Minimize" onClick={() => closeWindow(target)}>
        <span className="minimize" />
      </button>
      <button type="button" className="control-hit" aria-label="Maximize">
        <span className="maximize" />
      </button>
    </div>
  )
}

export default WindowControls
