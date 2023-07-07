import { useCart } from "../context/CartContext"
import { CartCard } from "../components"

export const Cart = () => {

    const { total, cartList } = useCart()

    return (
        <main>
            <section>
                <div className="flex flex-wrap justify-start other:justify-evenly">
                    <h1 className='w-full text-2xl sm:mt-3 font-bold text-gray-900 text-center'>Cart Items: {cartList.length} / ${total} </h1>
                    {cartList.map((product) => (
                        <CartCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </main>
    )
}
