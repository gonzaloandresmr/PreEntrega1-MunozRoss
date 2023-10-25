import React from 'react';
import { BiCartAlt } from "react-icons/bi";

const CartWidget = () => {
    return (
        <div>
            <BiCartAlt/>
            <p>0</p>
        </div>
    );
};

export default CartWidget;