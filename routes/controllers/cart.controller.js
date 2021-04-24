const controllers = [
    //soma de quantidade
    function addItemToCart(name, value, quantity) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart[i].quantity += value;
                saveCart()
            }

        }
        //add item ao carrinho
        const item = new Item(name, value);
        cart.push(item);
        saveCart()
    },

    //deletar item do carrinho
    function removeItemFromCart(name) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart[i].quantity--;
                if (cart[i].quantity === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
            saveCart()

        }
    },

    //Soma o total
    function getTotal() {
        let total = 0
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].quantity

        }
        return total.toFixed(2)
    },
]

module.exports = controllers;