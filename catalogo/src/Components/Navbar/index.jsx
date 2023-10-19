// import { useReducer } from 'react'
// import ProductItem from '../../Components/Cart/ProductItem'
// import SCartProduct from '../../Components/Cart/SCartProduct'
// import { reducerCart, productoInitialState } from '../../Components/Reducers/SCReducer'
// import Types from '../../Components/Reducers/inidex'

import  { NavLink }  from "react-router-dom"

const Navbar = () =>{

    const activeStyle = ' underline underline-offset-4'

    return (
        <>
        
        <nav className='flex justify-center items-center fixed z-10 w-full p-4 px-8 text-sm font-light bg-Discord text-Blanco' >
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
                        <span className="bg-Blanco absolute rounded-full w-3 h-3" ><p className=" text-Discord font-extrabold mb-5">3</p></span>
                        <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/5465/5465858.png" alt="" srcSet='' />
                        
                    </NavLink>
                </li>
                
            </ul>
            
            
        </nav>
        
        
        </>
        
        

                
    )
}

export default Navbar