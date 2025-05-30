// manipulação dos itens

//--> criar itens com subtotal calculado
async function createItem(name, price, quantity) {
    return{
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    }
}
export default createItem;

