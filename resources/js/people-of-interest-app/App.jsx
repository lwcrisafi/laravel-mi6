import React, { useState } from "react";
import Navigation from "./Navigation";
import MainContent from "./MainContent";
import "./styles/app.scss";

export default function App() {
    const [content, setContent] = useState("");
    return (
        <>
            <Navigation content={content} setContent={setContent} />
            <MainContent content={content} />
        </>
    );
}
