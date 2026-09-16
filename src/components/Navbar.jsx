import dayjs from "dayjs";
import { useState } from "react";

import { navIcons, navLinks } from "#constants"
import useWindowStore from "#store/window";
import AppearanceMenu from "./AppearanceMenu";

const BASE_URL = import.meta.env.BASE_URL;

const Navbar = () => {

const { openWindow } = useWindowStore();
const [appearanceOpen, setAppearanceOpen] = useState(false);
const resumeLink = navLinks.find(({ type }) => type === "resume");
const otherLinks = navLinks.filter(({ type }) => type !== "resume");


  return (
    <nav>
        <div>
            <img src={`${BASE_URL}images/logo.svg`} alt="logo" className="dark:invert"/>
            <p className="font-bold text-text-primary"> Ajays's Portfolio</p>

            <ul>
                {otherLinks.map(({ id, name, type }) => (
                    <li key={id} onClick={() => openWindow(type)}>
                        <p>{name}</p>
                    </li>

                ))}
            </ul>

            {resumeLink && (
                <p className="resume-link" onClick={() => openWindow(resumeLink.type)}>
                    {resumeLink.name}
                </p>
            )}
        </div>

            <div>
                <ul>
                    {navIcons.map(({id, img, type}) => (
                        type === "mode" ? (
                            <li key={id} className="relative">
                                <img
                                    src={img}
                                    className="icon-hover cursor-pointer dark:invert"
                                    alt="Appearance"
                                    onClick={() => setAppearanceOpen((prev) => !prev)}
                                />
                                <AppearanceMenu open={appearanceOpen} onClose={() => setAppearanceOpen(false)} />
                            </li>
                        ) : (
                            <li key={id}>
                                <img src={img} className="icon-hover dark:invert" alt={`icon-${id}`}/>
                            </li>
                        )
                    ))}
                </ul>

                <time>{dayjs().format('ddd MMM D h:mm A ')}</time>
            </div>


    </nav>
  )
}

export default Navbar