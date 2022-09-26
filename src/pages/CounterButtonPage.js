import React, {useState, useEffect} from "react";
import { CounterButton } from "../CounterButton";
import { CongradulationsMessage } from "../CongradulationsMessage";
import { DisplayIf } from "./DisplayIf";
import { usePersistentState } from "../usePersistentState";

export const CounterButtonPage = () => {
    const [numberOfClicks, setNumberOfKlicks] = usePersistentState('numberOfClicks', 0, Number)
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