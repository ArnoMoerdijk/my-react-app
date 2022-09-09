import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';

export const ProtectedPage = () => {
    const history = useNavigate();

    const isAuthed = true;
    useEffect(() => {
        if (!isAuthed) {
            history('/');
        }
    });

    return (
        <h1>Only authed users should be able to see this!</h1>
    );
}