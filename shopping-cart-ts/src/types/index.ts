export type Guitar = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
}
/* or interface
*  interface Guitar {
*    id: number,
*    name: string,
*    image: string,
*    description: string,
*    price: number,
*    }
*/
export type CartItem = Guitar & {
    quantity: number,
}
/* interface CartItem
* interface CartItem extends Guitar {
*    quantity: number,
*}
*/
export type GuitarID = Guitar['id'];