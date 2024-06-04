export type RegisterContextProps = {
    name: string,
    setName: (name: string) => void,
    lastName: string,
    setLastName: (name: string) => void,
    userName: string,
    setUserName: (name: string) => void,
    email: string,
    setEmail: (name: string) => void,
    password: string
    setPassword: (name: string) => void,
    submitHandler: (event: React.FormEvent) => void,
    message: string,
    error: string

}

export type LoginContextProps = {
    email: string,
    setEmail: (name: string) => void,
    password: string
    setPassword: (name: string) => void,
    loginHandler: (event: React.FormEvent) => Promise<LoginResponse | void>,
    error: string,
    setError: (error: string) => void
}

export type LoginResponse = {
    token: string;
    user: {
        id: string;
        email: string;
        userName: string;
        name: string;
        role: string;
        confirmationToken: string | null;
        emailConfirmed: boolean;
    }
}

export type User = {
    id: string;
  email: string;
  userName: string;
  name: string;
  role: string;
  confirmationToken: string | null;
  emailConfirmed: boolean;
}

export type AuthContextProps = {
    user: User | null,
    isAuthenticated: boolean,
    login: (user: User) => void,
    logout: () => void,
    loading: boolean
}

export type Products = {
    id: string,
    title: string,
    quantity: number,
    price: number,
    images: string
}

type OrderProducts = Omit<Products, 'quantity'>

type OrderItem = {
    id: string,
    orderId: string,
    productId: string,
    quantity: number,
    product: OrderProducts
}

export type Orders = {
    id: string,
    userId: string,
    createdAt: string,
    items: OrderItem[]
}

export type ProductsContextProps = {
    products: Products[],
    orders: Orders[]
    addProduct: (product: Products) => void
}

export type CreateProductContextProps = {
    title: string,
    setTitle: (name: string) => void,
    quantity: number,
    setQuantity: (name: number) => void,
    price: number,
    setPrice: (name: number) => void,
    images: string,
    setImages: (name: string) => void,
    submitHandler: (event: React.FormEvent) => void,
    message: string,
    error: string
}

export type ProductsCartType = {
    id: string
    title: string
    quantity: number
    price: number
    images: string
}[]

export type CartContextProps = {
    cart: Products[]
    addToCart: (products: ProductsCartType[0]) => void
    removeFromCart: (products: ProductsCartType[0]) => void
    clearCart: () => void
}

export type CartAction = 
    | { type: 'ADD_TO_CART'; payload: ProductsCartType[0] }
    | { type: 'REMOVE_FROM_CART'; payload: { id: string } }
    | { type: 'CLEAR_CART'; payload?: never}

export type PurchaseCart = {
    productId: string
    quantity: number
}