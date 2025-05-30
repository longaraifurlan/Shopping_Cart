// services/item.js

async function createItem(product, name, price, quantity) {
    return {
        product,
        name,
        price,
        quantity,
        subtotal() {
            return this.price * this.quantity
        }
    }
}

export default createItem
