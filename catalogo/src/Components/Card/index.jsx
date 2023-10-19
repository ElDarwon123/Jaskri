import { useReducer } from 'react'
import ProductItem from '../../Components/Cart/ProductItem'
import SCartProduct from '../../Components/Cart/SCartProduct'
import { reducerCart, productoInitialState } from '../../Components/Reducers/SCReducer'
import Types from '../../Components/Reducers/inidex'

const Card = () => {
    return (

// ME FALTA HACER QUE EL BOTON DEL CELULAR LO AGREGUE AL CARRITO Y DEMÁS
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg m-10">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="text-Blanco absolute bottom-0 left-0 bg-Blanco/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {" "}
                    Dispositivos{" "}
                </span>
                <img 
                    className="w-full h-full object-cover rounded-lg mt-5"
                    src="https://images.samsung.com/is/image/samsung/p6pim/latin/feature/164715284/latin-feature-galaxy-s-537641420?$FB_TYPE_A_MO_JPG$"
                    alt=""
                    srcSet=""
                />
                <button className="absolute top-0 right-0 flex justify-center items-center bg-Blanco w-5 h-5 rounded-full m-2 p-1">
                    <p onClick={()=>addToCart(data.id)}>+</p>
                </button>
                
            </figure>
            <p className="flex justify-between">
                <span className=" text-sm font-light" >CELULAR</span>
                <span className="text-lg font-medium">$123</span>
            </p>
        </div>
    );

};

export default Card;