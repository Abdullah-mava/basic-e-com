// /app/page.tsx

import { fetchBooks, Book } from "@/app/lib/api";
import BookCard from "@/app/components/BookCard";
import Link from "next/link";

export default async function HomePage() {
  // Fetch all books from MockAPI
  const books: Book[] = await fetchBooks();

  return (
    <div className="container mx-auto p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to the Book Store</h1>
        <p className="mt-4 text-lg">
          Discover a world of literature and find your next favorite book.
        </p>
      </header>

      {/* Display books in a responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book: Book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>

      {/* Optional link to the full books page */}
      <div className="mt-8 text-center">
        <Link href="/books" className="text-blue-500 underline">
          View All Books
        </Link>
      </div>
    </div>
  );
}
