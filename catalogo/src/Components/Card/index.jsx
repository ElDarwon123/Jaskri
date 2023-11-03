import { useContext } from "react";
import { CartContext } from "../../Context";


const Card = ( data ) => {
    const context = useContext(CartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }
    const addProductToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }
    const renderIcon = (id) => {
        const isInCart = 
        context.cartProducts.filter(product => product.id === id).lenght > 0
        if (isInCart) {
            return(
                <div className=" absolute top-0 right-0 flex justify-center items-center bg-lime-500
                w-6 h-6 rounded-full m2 p1 text-black" 
                onClick={(event) =>
                addProductToCart(event, data.data)}
                > X
                </div>
            )
        }else{
            <div className="absolute top-0 right-0 justify-center items-center bg-white w-6 h-6 rounded-lg m-2 p-1"
            onClick={(event) => addProductToCart(event, data.data)}>
                +
            </div>
        }
    }
    return (
        

// ME FALTA HACER QUE EL BOTON DEL CELULAR LO AGREGUE AL CARRITO Y DEMÁS
        <div className="carta bg-white cursor-pointer w-56 h-60 rounded-lg m-10" onClick={() => showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5">
                    <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {data.data.category.name}
                </span>
                <img 
                    className="w-full h-full object-cover rounded-lg "
                    src={data.data.images}
                    alt=""
                    srcSet=""
                />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-5 h-5 rounded-full m-2 p-1"
                onClick={() => context.setCount( context.count + 1 )}>
                    +
                </div>
                
            </figure>
            <p className="flex justify-between">
                <span className="titulo text-sm font-light" >{data.data.title}</span>
                <span className="precio text-lg font-medium">{data.data.price}</span>
            </p>
        </div>
    );

};

export default Card;