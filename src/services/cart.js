// services/cart.js

// Adiciona item ao carrinho
async function addItem(userCart, item) {
    userCart.push(item)
}

// Calcula o total do carrinho
async function calculateTotal(userCart) {
    console.log("\n💲 Shopping Cart TOTAL IS:")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`Total € ${result.toFixed(2)}`) // Usando .toFixed(2) para exibir com 2 casas decimais
}

// Deleta item com base no nome
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)
    if (index !== -1) {
        userCart.splice(index, 1)
    }
}

// Remove uma unidade do item, ou remove completamente se for a última
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex(
        (p) => p.name.toLowerCase().trim() === item.name.toLowerCase().trim()
    )

    if (indexFound === -1) {
        console.log("item não encontrado!")
        return
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
    } else {
        userCart.splice(indexFound, 1)
    }
}

// Mostra todos os itens no carrinho
async function displayCart(userCart) {
    console.log("\n🛒 Shopping Cart list:")
    userCart.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.product} ${item.name} - € ${item.price} | ${item.quantity}x | Subtotal = € ${item.subtotal().toFixed(2)}`
        )
    })
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}
