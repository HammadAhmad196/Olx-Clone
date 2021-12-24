import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Show = () => {

    const history = useHistory()
    const handleClick = () => {
        history.push("/login");
    }

    return (
        <div>
            <Link onClick={handleClick}>
                Show Number
            </Link>
        </div>
    )
}

export default Show;
