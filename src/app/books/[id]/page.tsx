// app/books/[id]/page.tsx
import { fetchBooks, Book } from "@/app/lib/api";
import BookDetail from "@/app/components/BookDetail";

// Casting params as any to satisfy the PageProps constraint.
export default async function BookDetailPage({ params }: { params: any }) {
  // Fetch all books and then find the one matching the dynamic route ID.
  const books: Book[] = await fetchBooks();
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    return <p className="text-center text-red-500">Book not found</p>;
  }

  // Pass the fetched book data to the client component.
  return <BookDetail book={book} />;
}
