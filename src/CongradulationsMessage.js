import React, {useEffect} from "react";
import { Button } from "./Button";

export const CongradulationsMessage = ({treshold, onHide}) => {
    return (
        <>
            <h1>Congradulations! You've reached {treshold} number of clicks</h1>
            <Button onClick={onHide}>Hide</Button>
        </>
    );
}