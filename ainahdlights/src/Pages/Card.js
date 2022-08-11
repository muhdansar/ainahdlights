import React from "react";

const Card = (props) => {

        return (
        <div>
                <h3>{props.item}</h3>
                <p>Quantity: {props.qty}</p>
                <p>Subtotal: ${(props.qty)*(props.price)}</p> 
        </div>
        )
};

export default Card;