export default function ProductItem({data, addToCart}){
    return(
        <div>
            <h2>{data.name}</h2>
            <p>Price: {data.price} </p>
            <button onClick={()=>addToCart(data.id)}>Añadir al cart</button>
        </div>
    )
}