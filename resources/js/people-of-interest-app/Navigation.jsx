import React from "react";
import { useState } from "react";

export default function Navigation() {
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
                        <li className="sidenav__link sidenav__link_active">
                            <a href="#">Home</a>
                        </li>
                        <li className="sidenav__link">
                            <a href="#">People of interest</a>
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
