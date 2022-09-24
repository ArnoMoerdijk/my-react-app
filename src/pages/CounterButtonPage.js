import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import {parse} from "query-string"
import { CounterButton } from "../CounterButton";
import { CongradulationsMessage } from "../CongradulationsMessage";
import { DisplayIf } from "./DisplayIf";

export const CounterButtonPage = () => {
    const location = useLocation();
    const startingValue = parse(location.search).startingValue || 0;
    const [numberOfClicks, setNumberOfKlicks] = useState(Number(startingValue));
    const [hideMessage, setHideMessage] = useState(false);
  
    const increment = () => setNumberOfKlicks(numberOfClicks + 1);
  
    return (
      <>
      <h1>The Counter Button Page</h1>
      <DisplayIf condition={!hideMessage && numberOfClicks >=10} >
        <CongradulationsMessage  
          treshold={10} 
          onHide={() => setHideMessage(true)}/>
      </DisplayIf>
      <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/>
      </>
    );
};