import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoBack() {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(-1)} style={{cursor: "pointer"}}>GoBack</button>
    )
}

export default GoBack;