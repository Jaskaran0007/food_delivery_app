import React, { useEffect, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

const Card = (props) => {
    const dispatch = useDispatchCart();
    const data = useCart();

    // Extract options from props
    const optionsArray = props.foodItem.options || [];
    const options = optionsArray.reduce((acc, option) => ({ ...acc, ...option }), {}); // Merge all option objects
    const priceOptions = Object.keys(options); // Get size options (e.g., "half", "full")

    // Component state
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(priceOptions[0] || ""); // Default size
    const [finalPrice, setFinalPrice] = useState(0);

    // Handle adding an item to the cart
    const handleAddCart = async () => {
        // Check if the item already exists in the cart
        const existingItem = data.find(
            (item) => item.id === props.foodItem._id && item.size === size
        );

        if (existingItem) {
            // Update the existing item's quantity and price
            await dispatch({
                type: "UPDATE",
                id: props.foodItem._id,
                qty: qty,
                price: finalPrice,
            });
        } else {
            // Add a new item to the cart
            await dispatch({
                type: "ADD",
                id: props.foodItem._id,
                name: props.foodItem.name,
                price: finalPrice,
                qty: qty,
                size: size,
            });
        }
    };

    // Calculate final price whenever qty or size changes
    useEffect(() => {
        if (size) {
            setFinalPrice(qty * (options[size] ? parseInt(options[size]) : 0));
        }
    }, [qty, size, options]);

    return (
        <div>
            <div>
                <div className="card mt-3" style={{ width: "17rem", maxHeight: "360px" }}>
                    <img
                        src={props.foodItem.img}
                        className="card-img-top"
                        alt="Food item"
                        style={{ height: "120px", objectFit: "fill" }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        <div className="container w-100">
                            <select
                                className="m-2 h-100 bg-success rounded"
                                onChange={(e) => setQty(Number(e.target.value))}
                                value={qty}
                            >
                                {Array.from(Array(6), (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="m-2 h-100 bg-success rounded"
                                onChange={(e) => setSize(e.target.value)}
                                value={size}
                            >
                                {priceOptions.map((data) => (
                                    <option key={data} value={data}>
                                        {data.charAt(0).toUpperCase() + data.slice(1)}
                                    </option>
                                ))}
                            </select>
                            <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
                        </div>
                        <hr />
                        <button
                            className="btn btn-success justify-center ms-2"
                            onClick={handleAddCart}
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
