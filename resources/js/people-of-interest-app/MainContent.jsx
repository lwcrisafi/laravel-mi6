import React from "react";
import People from "./People";

export default function MainContent({ content }) {
    let chosenContent;
    switch (content) {
        case "":
            chosenContent = <h1>Welcome to MI6</h1>;
            break;
        case "people-of-interest":
            chosenContent = <People />;
            break;
        default:
            break;
    }
    return (
        <>
            <main>{chosenContent}</main>
        </>
    );
}
