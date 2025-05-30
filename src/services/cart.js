// ações do carrinho

// casos de uso
//✅--> adicionar item
async function addItem(userCart, item) {
    userCart.push(item)
}

//✅--> calcular total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total,item) => total + item.subtotal(), 0)
    console.log(`€ ${result}`)
}

//--> deletar item
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if (index != -1){
        userCart.splice(index, 1)
    }
}

//--> remover item
async function removeItem(userCart, index) {
    
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}