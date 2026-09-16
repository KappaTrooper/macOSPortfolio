import clsx from "clsx";

const DesktopIcon = ({ icon, label, onClick, className }) => (
  <button type="button" onClick={onClick} className={clsx("desktop-icon", className)}>
    <img src={icon} alt={label} />
    <p>{label}</p>
  </button>
);

export default DesktopIcon;
