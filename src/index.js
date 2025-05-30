import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []
const myWhishList = []


console.log("🛒  Welcome to the your Shopping Cart! 🛒")

const item1 = await createItem("Absolut", 15.90, 1)
const item2 = await createItem("Ballantines", 12.90, 1)
const item3 = await createItem("Beefeater 24", 22.90,1)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myWhishList, item3)

await cartService.deleteItem(myCart, item2.name)
await cartService.deleteItem(myCart, item1.name)

console.log("💲 Shopping Cart TOTAL IS:")
await cartService.calculateTotal(myCart)
console.log("💝 Your Whish List Total IS:")
await cartService.calculateTotal(myWhishList)