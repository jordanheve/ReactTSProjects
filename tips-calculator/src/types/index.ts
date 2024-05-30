export type Item = {
    id: number,
    name: string,
    price: number,
}

export type OrderItem = Item & {
    quantity: number,
}