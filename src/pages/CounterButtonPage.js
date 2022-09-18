import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import {parse} from "query-string"
import { CounterButton } from "../CounterButton";
import { CongradulationsMessage } from "../CongradulationsMessage";

export const CounterButtonPage = () => {
    const location = useLocation();
    const startingValue = parse(location.search).startingValue;
    const [numberOfClicks, setNumberOfKlicks] = useState(Number(startingValue));
    const [hideMessage, setHideMessage] = useState(false);
  
    const increment = () => setNumberOfKlicks(numberOfClicks + 1);
  
    return (
      <>
      <h1>The Counter Button Page</h1>
          {hideMessage
            ? null
            :<CongradulationsMessage numberOfClicks={numberOfClicks} treshold={10} onHide={() => setHideMessage(true)}/>}
          <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/>
      </>
    );
};