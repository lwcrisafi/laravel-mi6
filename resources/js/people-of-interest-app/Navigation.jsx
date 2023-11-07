import React from "react";
import { useState } from "react";

export default function Navigation({ content, setContent }) {
    const [open, setOpen] = useState(true);
    const toggleMenu = () => {
        setOpen(!open);
    };
    return (
        <>
            <nav className={"sidenav" + (open ? "" : " sidenav_closed")}>
                <div className="sidenav__content">
                    <img
                        src="./images/logos/mi6-seal.png"
                        alt="seal"
                        className="sidenav__image"
                    />

                    <ul className="sidenav__links">
                        <li
                            className={
                                "sidenav__link" +
                                (content === "" ? " sidenav__link_active" : "")
                            }
                        >
                            <a href="#" onClick={() => setContent("")}>
                                Home
                            </a>
                        </li>
                        <li
                            className={
                                "sidenav__link" +
                                (content === "people-of-interest"
                                    ? " sidenav__link_active"
                                    : "")
                            }
                        >
                            <a
                                href="#"
                                onClick={() => setContent("people-of-interest")}
                            >
                                People of interest
                            </a>
                        </li>
                        <li
                            className={
                                "sidenav__link" +
                                (content === "missions"
                                    ? " sidenav__link_active"
                                    : "")
                            }
                        >
                            <a href="#" onClick={() => setContent("missions")}>
                                Missions
                            </a>
                        </li>
                    </ul>
                </div>
                <span
                    className={
                        "sidenav__arrow" +
                        (open ? "" : " sidenav__arrow_closed")
                    }
                    onClick={() => setOpen(!open)}
                ></span>
            </nav>
        </>
    );
}
