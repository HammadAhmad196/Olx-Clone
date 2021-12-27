import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Show = () => {

    const adDetails = useSelector((state) => state.adDetails);
    const { ad } = adDetails

    console.log("adDetails", ad)


    // const handleClick = () => {
    //     const ad = adDetails
    //     if (ad) {
    //         <Redirect to="/ad/:id" />;
    //     } else {

    //         <Redirect to="/login" />;
    //     }
    // }

    const history = useHistory()

    const handleClick = () => {
        history.push("/login")
    }

    return (
        <div>
            <Button onClick={handleClick}>
                Show Number
            </Button>
        </div>
    )
}

export default Show;
