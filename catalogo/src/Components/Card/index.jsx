
const Card = ( data ) => {
    return (

// ME FALTA HACER QUE EL BOTON DEL CELULAR LO AGREGUE AL CARRITO Y DEMÁS
        <div className="carta bg-white cursor-pointer w-56 h-60 rounded-lg m-10">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="text-Blanco absolute bottom-0 left-0 bg-Blanco/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {data.data.category.name}
                </span>
                <img 
                    className="w-full h-full object-cover rounded-lg "
                    src={data.data.images}
                    alt=""
                    srcSet=""
                />
                <button className="absolute top-0 right-0 flex justify-center items-center bg-Blanco w-5 h-5 rounded-full m-2 p-1">
                    <p>+</p>
                </button>
                
            </figure>
            <p className="flex justify-between">
                <span className="titulo text-sm font-light" >{data.data.title}</span>
                <span className="precio text-lg font-medium">{data.data.price}</span>
            </p>
        </div>
    );

};

export default Card;