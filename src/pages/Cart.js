import { CartCard } from "../components"

export const Cart = () => {
    const cartprod = [
        {
            'id': 1,
            'name': 'Apple WatchX 34SJJX',
            'image': 'assets/images/1.jpg',
            'price': '600'
        },
        {
            'id': 2,
            'name': 'Apple WatchX 34SJJX',
            'image': 'assets/images/4.jpg',
            'price': '300'
        }
    ]
    return (
        <main>
            <section>
                <div className="flex flex-wrap justify-start other:justify-evenly">
                    <div className='w-full mt-5'>
                        <h1 className='w-full text-2xl sm:text-4xl font-bold text-gray-900 text-center'>Cart Items: 2</h1>
                    </div>
                    {cartprod.map((prod) => (
                        <CartCard key={prod.id} prod={prod} />
                    ))}
                </div>
            </section>
        </main>
    )
}
