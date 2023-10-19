import { useReducer } from 'react'
import ProductItem from '../../Components/Cart/ProductItem'
import SCartProduct from '../../Components/Cart/SCartProduct'
import { reducerCart, productoInitialState } from '../../Components/Reducers/SCReducer'
import Types from '../../Components/Reducers/inidex'

function Cart(){

    const [state , dispatch] = useReducer (reducerCart, productoInitialState)

    const addToCar = (id) => {
        dispatch({
            type: Types.Añadir,
            paylo
        })
    }

    return(
    <>
        <div className="flex text-center justify-center mt-10">
            <button className="btn btn_PrecioTotal">Precio Total</button>
            <button className="btn btn_ClearCart">Clear cart </button>
        </div>
        <div className="container_grid_shopping_cart">


        </div>
        {/* {
            state.Cart.length === 0 && <p>No hay nada</p>
        } */}
    </>
    )
}

export default Cart