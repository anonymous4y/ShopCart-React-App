import { Link } from "react-router-dom"

export const Card = ({ product }) => {
    const { id, name, price, image } = product
    return (
        <div className="w-full max-w-sm m-auto my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <img className=" p-8 rounded-t-lg" src={image} alt="product" />
            </Link>
            <div className="px-5 pb-5">
                <Link href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </Link>

                <div className="flex items-center justify-between pt-5 pb-4">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">${price}</span>
                    <button href="#" className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
