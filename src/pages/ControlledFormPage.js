import React, { useState } from "react";
import { SuccesButton } from "../Button";

export const ControlledFormPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');
    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Favorite Color" 
                    value={favoriteColor}
                    onChange={e => setFavoriteColor(e.target.value)}
                    />
            </div>
            <SuccesButton onClick={e => {
                alert(`
                    Your name is ${name},
                    your email is ${email},
                    and your favorite colo is ${favoriteColor}!
                `);
                e.preventDefault();
            }}>Submit</SuccesButton>
        </form>
    )
};