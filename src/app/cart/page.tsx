"use client";

import Link from "next/link";
import { useCartStore } from "@/app/store/cart";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCartStore();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Shopping Cart
      </h1>
      {items.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-gray-500">Your cart is empty.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md mr-0 sm:mr-4 mb-4 sm:mb-0"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600">
                  {item.quantity} x ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  href={`/books/${item.id}`}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-center"
                >
                  View Details
                </Link>
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <button
              onClick={clearCart}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-md"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
