export default function SCartProduct({data, deleteFromCart}){
    return(
        <div>
            <h2>{data.name}</h2>
            <p>Price: {data.price} </p>
            <button onClick={()=>deleteFromCart(data.id)}>Eliminar del carrito</button>
        </div>
    )
}