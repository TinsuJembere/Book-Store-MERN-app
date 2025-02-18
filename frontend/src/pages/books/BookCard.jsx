import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import getImg from "../../utils/getImg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";


const BookCard = ({ book }) => {
    const dispatch = useDispatch();

    const handleAddToCart = ()=>{
        dispatch(addToCart(book))
    }
  return (
    <div className=" rounded-lg transition-shadow duration-300">
        <div
            className="flex flex-col sm:flex-row sm:items-center sm:min-h-100  sm:justify-center gap-4"
        >
            <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
                <Link to={`/books/${book._id}`}>
                    <img
                        src={`${getImg(book?.coverImage)}`}
                        alt=""
                        className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                    />
                </Link>
            </div>

            <div>
                <Link to={`/books/${book._id}`}>
                    <h3 className="text-lg font-semibold hover:text-blue-600 mb-3">
                   {book?.title}
                    </h3>
                </Link>
                <p className="text-gray-600 mb-5">{book?.description.length > 80 ? `${book.description.slice(0, 80)}...` : book?.description}</p>
                <p className="font-medium mb-5">
                    ${book?.newPrice} <span className="line-through font-normal ml-2">$ {book?.oldPrice}</span>
                </p>
                <button type="button" onClick={()=>handleAddToCart()} className="bg-primary  flex items-center gap-1 px-2 py-2 rounded-md text-base font-secondary font-sm hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer">
  <FiShoppingCart className="w-5 h-5" />
  <span>Add to basket</span>
</button>

            </div>
        </div>
    </div>
)
};

export default BookCard;
