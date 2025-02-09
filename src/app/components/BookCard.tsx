"use client";

import Link from "next/link";
import { Book } from "@/app/lib/api";

export default function BookCard({ id, name, price, image, description }: Book) {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
      <img 
        src={image} 
        alt={name} 
        className="w-full max-h-96 object-cover rounded-md mb-4" 
      />
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600 mt-2">
        ${typeof price === "number" ? price.toFixed(2) : "N/A"}
      </p>
      <p className="text-gray-500 text-sm mt-2">
        {description ? description.slice(0, 80) : ""}...
      </p>
      <div className="mt-4">
        <Link href={`/books/${id}`}>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
