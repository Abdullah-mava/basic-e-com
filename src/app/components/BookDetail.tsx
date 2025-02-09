// app/components/BookDetail.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Book } from "@/app/lib/api";
import { useCartStore } from "@/app/store/cart";

interface BookDetailProps {
  book: Book;
}

export default function BookDetail({ book }: BookDetailProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [notification, setNotification] = useState("");

  const handleAddToCart = () => {
    // Add the book to the cart
    addItem({
      id: book.id,
      name: book.name,
      price: book.price,
      image: book.image,
      quantity: 1,
    });

    // Show a temporary notification
    setNotification("Item added to cart!");

    // Clear the notification after 3 seconds
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-md mt-6 bg-white relative">
      {/* Notification Toast */}
      {notification && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md">
          {notification}
        </div>
      )}

      <img
        src={book.image}
        alt={book.name}
        className="w-full min-h-96 object-cover rounded-md"
      />
      <h1 className="text-2xl font-bold mt-4 text-gray-800">{book.name}</h1>
      <p className="text-lg text-gray-700 mt-2">${book.price.toFixed(2)}</p>
      <p className="text-gray-600 mt-4">{book.description}</p>
      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add to Cart
        </button>
        <Link
          href="/books"
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
        >
          Back to Books
        </Link>
      </div>
    </div>
  );
}
