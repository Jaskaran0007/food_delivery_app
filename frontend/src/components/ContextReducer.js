
import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext(); // Corrected name

const initialState = [];

// Reducer function to manage cart state
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    qty: action.qty,
                    size: action.size,
                    price: action.price,
                    img: action.img
                }
            ];
            case "REMOVE":
                let newArr = [...state]
                newArr.splice(action.index,1)
                return newArr; 
            case "UPDATE":
                let arr = [...state]
                arr.find((food, index) => {
                    if(food.id === action.id){
                        console.log(food.qty,parseInt(action.qty), action.price + food.price)
                        arr[index] = {...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price}
                    }
                    return arr
                })    
                return arr
                case "DROP": 
                let empArray = []
                    return empArray
        default:
            console.log("Error in Reducer");
            return state; // Return current state for unrecognized actions
    }
};

// CartProvider component to provide state and dispatch to children
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
};

// Custom hooks to use cart state and dispatch
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);