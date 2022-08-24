import React, {useState} from "react";
import { CounterButton } from "../CounterButton";
import { CongradulationsMessage } from "../CongradulationsMessage";

export const CounterButtonPage = () => {
    const [numberOfClicks, setNumberOfKlicks] = useState(0);
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