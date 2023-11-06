import React from "react";
import Navigation from "./Navigation";
import MainContent from "./MainContent";
import People from "./People";
import "./styles/app.scss";

export default function App() {
    return (
        <>
            <Navigation />
            <MainContent />
            <People/>
        </>
    );
}
