import { useContext } from "react";
import { CartContext } from "../../Context";
import './style.css';
import OrderCart from "../OrderCart";

const CheckoutSideMenu = () => {
    const context = useContext(CartContext)

    const handleDelete = (id) => {
        const filteredProducts =
        context.cartProducts.filter(products => products.id != id)
        context.setCartProducts(filteredProducts)
    }
    return(
        <aside className={`${context.CheckoutSideOpen ? 'flex': 'hidden'}
        check-out-side-menu flex-col right-0 border border-black rounded-lg fixed bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className=" font-medium text-xl">
                    Mi Carrito
                </h2>
                <div onClick={() => context.closeCheckoutSideMenu() }>
                    X
                </div>
                <div className="px-6 overflow-y-scroll">
                    {
                        context.cartProducts.map(product => (
                            <OrderCart 
                            key = {product.id}
                            title = {product.title}
                            imageUrl = {product.image}
                            price = {product.price}
                            handleDelete = {product.handleDelete}
                            />
                        ))
                    }
                </div>
            </div>
        </aside>
    )
}
export default CheckoutSideMenu