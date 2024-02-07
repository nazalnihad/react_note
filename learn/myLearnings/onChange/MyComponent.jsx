import React, { useState } from "react";

function MyComponent()
{
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState("");
    const [delivery, setDelivery] = useState("delivery");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleDeliveryChange(event) {
        setDelivery(event.target.value);
    }
    
    return (
        <div>
            <input value={name} type="text" onChange={handleNameChange} />
            <p>Name : {name}</p>
            
            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity : {quantity}</p>
            
            <textarea name="" id="" cols="30" rows="10" value={comment} onChange={handleCommentChange} placeholder="siuuu"></textarea>
            <p>Comment : {comment}</p>
            
            <select value={payment} onChange={handlePaymentChange} name="" id="">
                <option value="">Select an option</option>
                <option value="paytm">Paytm</option>
                <option value="Gpay">Gpay</option>
            </select>
            <p>payment Type : {payment}</p>
            
            <label htmlFor="">
                Pick Up
                <input type="radio" value="pick up"
                    checked={delivery === "pick up"}
                onChange={handleDeliveryChange}/>
            </label>
            <br />
            <label htmlFor="">
                Home Delivery
                <input type="radio" value="delivery"
                    checked={delivery === "delivery"}
                onChange={handleDeliveryChange}/>
            </label>
            <p>Shipping : { delivery}</p>
        </div>
    )
}
export default MyComponent;