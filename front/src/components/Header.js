import React from "react";
import logo from "../logo.svg";

export const Header = () => {
    return (
        <header className="w-screen items-center bg-header flex justify-between h-16">
            <img src={logo} className="App-logo cursor-pointer w-16 h-16" alt="logo" />
            <button className="rounded-full bg-slate-400 w-10 h-10 mr-3">未</button>
        </header>
    );
};
