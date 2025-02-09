// app/books/page.tsx
import BookCard from "@/app/components/BookCard";
import { fetchBooks, Book } from "@/app/lib/api";

export default async function BooksPage() {
  // Fetch all books from MockAPI
  const books: Book[] = await fetchBooks();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Book Store</h1>
      {books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book: Book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      ) : (
        <p className="text-center">No books available.</p>
      )}
    </div>
  );
}
