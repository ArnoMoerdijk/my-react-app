import React, {useEffect} from "react";

export const CongradulationsMessage = ({numberOfClicks, treshold, onHide}) => {
    useEffect(() => {
        return () => console.log('ÇongradulationMessage unmounting!');
    }, []);
    
    return numberOfClicks >= treshold
        ? <>
            <h1>Congradulations! You've reached {treshold} number of clicks</h1>
            <button onClick={onHide}>Hide</button>
        </>
        : null;
}