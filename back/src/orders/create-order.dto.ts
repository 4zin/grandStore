

// export class CreateOrderDto {
//     items: {
//         productId: string
//         quantity: number
//     }[]
// }

export type CreateOrderDto = {
    items: OrderItem[]
}

type OrderItem = {
    productId: string
    quantity: number
}