import axios from "axios";
import {  PurchaseCart } from "../types";

const BASE_URL = "http://localhost:3000/orders";

export const createOrder = async (items: PurchaseCart[]) => {
    try {
        const response = await axios.post(BASE_URL, {items}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        return response.data
    } catch (error) {
        throw new Error('Error creating order');
    }
}