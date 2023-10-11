import  { NavLink }  from "react-router-dom"

const Navbar = () =>{

    const activeStyle = ' underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full px-8 text-sm font-light' >
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg gap-3'>
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
                
            </ul>
            
        </nav>
    )
}

export default Navbar