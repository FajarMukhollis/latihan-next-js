"use client";

import React from "react";

const ViewUserButton = () => {
    const handleClick = () => alert('liat user');

    return (
        <>
            <button onClick={handleClick}>liat user</button>
        </>
    );
};

export default ViewUserButton;