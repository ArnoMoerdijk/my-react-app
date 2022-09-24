import React, {useEffect} from "react";

export const CongradulationsMessage = ({treshold, onHide}) => {
    return (
        <>
            <h1>Congradulations! You've reached {treshold} number of clicks</h1>
            <button onClick={onHide}>Hide</button>
        </>
    );
}