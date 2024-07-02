import React from "react";
import Profile from "../components/Profile";
import Language from "../components/Language";
import Project from "../components/Project";
import Tools from "../components/Tools";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <div className="font-poppins px-6 lg:px-36 min-h-screen">
            <Profile />
            <Language />
            <Project />
            <Tools />
        </div>
    );
}
