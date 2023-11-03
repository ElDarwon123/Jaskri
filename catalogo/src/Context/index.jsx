import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) =>
{   
    //contador del carrito
    const [count, setCount] = useState(0)
    //estado del los detaller del card
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    //mostrar o esconder detalles del card
    const openProductDetail = () => setIsProductDetailOpen(true)
    
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //mostrar o esconder carrito
    const[CheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false)

    //stado para detalles del producto del carrito 
    const openCheckoutSideMenu = () => setCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setCheckoutSideMenuOpen(false)
    //mostrar detalles del producto del card
    const[productToShow, setProductToShow] = useState({})

    //añadir productos al carrito
    const [cartProducts, setCartProducts] = useState([])

    return(
        <CartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            setIsProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts, setCartProducts,
            CheckoutSideMenuOpen,
            openCheckoutSideMenu, closeCheckoutSideMenu
        }}
        
        >
            {children}
        </CartContext.Provider>

    )
}