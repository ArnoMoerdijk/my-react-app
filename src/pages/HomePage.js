import React from "react";
import { Greeting } from "../Greeting";

export const HomePage = () => (
    <>
        <h1>The Home Page</h1>
        <Greeting name="Arno" numberOfMessages={10} />
    </>
);