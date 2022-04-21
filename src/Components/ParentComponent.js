import React, { createContext,useState } from "react";
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

export const CommonContext = createContext()
function ParentComponet() {
    
    const [color, setColor] = useState("yellow");
    function updateColor(colorToChange) {
        setColor(colorToChange);
    }
    let contextValue = { color, updateColor };
    return (
        <CommonContext.Provider value={contextValue}>
            <h2>Hello checking for context Api...</h2>
            <Header />
            <Main />
            <Footer/>
        </CommonContext.Provider>
    )
}

export default ParentComponet;