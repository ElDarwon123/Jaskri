import { useContext } from "react";
import { CartContext } from "../../Context";
import './styles.css';

const ProductDetail = () => {
    const context = useContext(CartContext);

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 
        'hidden'} product-detail flex-col right-0
        border border-black rounded-lg fixed bg-white
        `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detalle</h2>
                <button className="flex text-red-700 w-5 h-5 bottom-10 " onClick={() => context.closeProductDetail() }>
                X</button>
            </div>
            <figure className='px-6'>
                <img className="w-full h-full rounded-lg"
                src={context.productToShow.images} alt={context.productToShow.tittle} />
            </figure>
            <p className="flex flex-col p-6">
                <span className='font-medium text-2x1 mb-2'>{context.productToShow.price}</span>
                <span className='font-medium mb-2 text-base'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}
export default ProductDetail