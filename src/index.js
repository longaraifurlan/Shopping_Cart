import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []
const myWhishList = []


console.log("🛒  Welcome to the your Shopping Cart! 🛒")

const item1 = await createItem("Vodka","Absolut", 10.01, 3)
const item2 = await createItem("Whisky", "Ballantines", 15.01, 4)
const item3 = await createItem("Gin", "Beefeater 24", 20.01,1)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myWhishList, item3)

    // remover itens até o delete do mesmo
//await cartService.removeItem(myCart, item2)
//await cartService.removeItem(myCart, item2)
//await cartService.removeItem(myCart, item2)
//await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)

//await cartService.deleteItem(myCart, item2.name)
//await cartService.deleteItem(myCart, item1.name)


await cartService.calculateTotal(myCart)
console.log("\n💝 Your Whish List Total IS:")
await cartService.calculateTotal(myWhishList)