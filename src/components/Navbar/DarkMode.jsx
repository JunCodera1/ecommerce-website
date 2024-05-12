// eslint-disable-next-line no-unused-vars
import React from 'react';
import LightButton from "../../assets/light-mode-button.png";
import DarkButton from "../../assets/dark-mode-button.png";

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme")? localStorage.getItem
        ("theme") : "light"
    );

    const element = document.documentElement; // html element

    React.useEffect(() => {
        if (theme === "dark") {
            element.classList.remove("dark");
            localStorage.setItem("theme", "dark");
        } else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });

    return  (
        <div>
            <img src={LightButton} 
            alt="" 
            className="w-12 cursor-pointer drop-shadow-
            [1px_1px_1px_rgba(0,0,0,0.1)] transition-all 
            duration-300 absolute right-0 z-10 "
            />
            <img src={DarkButton} 
            alt="" 
            className="w-12 cursor-pointer drop-shadow-
            [1px_1px_1px_rgba(0,0,0,0.1)] transition-all 
            duration-300"
            />
        </div>
    );
};

export default DarkMode;