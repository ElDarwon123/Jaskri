// import { useReducer } from 'react'
// import ProductItem from '../../Components/Cart/ProductItem'
// import SCartProduct from '../../Components/Cart/SCartProduct'
// import { reducerCart, productoInitialState } from '../../Components/Reducers/SCReducer'
// import Types from '../../Components/Reducers/inidex'

import  { NavLink }  from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../Context"


const Navbar = () =>{

    const activeStyle = ' underline underline-offset-4'
    const context = useContext(CartContext)


    return (
        <>
        
            <nav className='nav flex justify-center items-center fixed z-10 w-full p-4 px-8 text-sm font-light text-Blanco' >
            <ul className='flex items-center gap-3' >
                <li className='font-semibold text-lg gap-3 '>
                    <NavLink to='/'
                    className={({ isActivate }) => isActivate ? activeStyle : undefined }>
                        Catalogo
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/home'
                        className={({ isActivate }) => isActivate ? activeStyle : undefined }>
                        Inicio 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contacto'
                        className={({ isActivate }) => isActivate ? activeStyle : undefined }>
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/*'
                        className={({ isActivate }) => isActivate ? activeStyle : undefined }>
                        Not Found
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Cart'
                    className={({ isActivate }) => isActivate ? activeStyle : undefined}>
                        
                        
                        <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/5465/5465858.png" alt="" srcSet='' />
                        
                    </NavLink>
                </li>
                <li>
                    {context.count}
                </li>
            </ul>
        </nav>
        </>
        
        

                
    )
}

export default Navbar