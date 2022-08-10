import React from 'react';

export const Greeting = ({ numberOfMessages, name }) => {
    if (!name) return null; 

    let isMorning = (new Date()).getHours() < 12;
    let greetingHeader = isMorning
      ? <h3>Good morning {name}!</h3>
      : <h3>Good evening {name}!</h3>;
    return (
      <>
        {greetingHeader}
        {numberOfMessages === 0
          ? null
          : <p>You have {numberOfMessages} new messages.</p>}
      </>
    );
}