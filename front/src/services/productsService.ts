/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_URL = "http://localhost:3000/products";

export const getProdcuts = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error: any) {
        throw new error
    }
    
}

export const createProducts = async (title: string, quantity: number, price: number, images: string) => {
    return await axios.post(API_URL, {
        title,
        quantity,
        price,
        images
    })
}