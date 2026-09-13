import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import clsx from "clsx";
import { Tooltip } from "react-tooltip";

const BASE_URL = import.meta.env.BASE_URL;

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Get in Touch</h2>
      </div>

      <div className="profile">
        <div className="avatar">
          <img src={`${BASE_URL}icons/user.svg`} alt="Ajay Singh" />
        </div>

        <h3>Ajay Singh</h3>
        <p className="role">Front-End Web Developer</p>

        <a href="mailto:contact@ajaysingh.ca" className="email-cta">
          Email
        </a>
      </div>

      <div className="divider" />

      <div className="social-row">
        {socials.map(({ id, text, icon, bg, link }) => (
          <div className="social-item" key={id}>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ backgroundColor: bg }}
              >
                <img src={icon} alt={text} />
              </a>
            ) : (
              <div
                className={clsx("social-icon", "disabled")}
                style={{ backgroundColor: bg }}
                aria-disabled
                data-tooltip-id="contact-tooltip"
                data-tooltip-content="Coming soon"
                data-tooltip-delay-show={150}
              >
                <img src={icon} alt={text} />
              </div>
            )}
            <span className="social-label">{text}</span>
          </div>
        ))}
      </div>

      <Tooltip id="contact-tooltip" place="top" className="tooltip" />
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
