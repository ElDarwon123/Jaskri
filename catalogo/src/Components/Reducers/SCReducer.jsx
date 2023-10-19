import Types from './inidex'

export const productoInitialState = {
    Products: [
        {
            'id': 1,
            'name': 'Producto 1',
            'price': 50
        },
        {
            'id': 2,
            'name': 'Producto 2',
            'price': 120
        },
        {
            'id': 3,
            'name': 'Producto 3',
            'price': 500
        },
        {
            'id': 4,
            'name': 'Producto 4',
            'price': 300
        },
        {
            'id': 5,
            'name': 'Producto 5',
            'price': 250
        },
        {
            'id': 6,
            'name': 'Producto 6',
            'price': 150
        }
    ],
    cart: [],
    PrecioTotalCart: 0
}

export const reducerCart = (state, action) =>{
    switch(action.Types){
        case Añadir:{

        }
        case EliminarTodo:{

        }
        case EliminarCosa:{

        }
        case CalcularPrecioTotal:{

        }
        default:
            return state
    }
    throw Error("Acción desconocida: ", action.Types)
}