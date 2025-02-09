// app/books/[id]/page.tsx
import { fetchBooks, Book } from "@/app/lib/api";
import BookDetail from "@/app/components/BookDetail";

export default async function BookDetailPage({ params }: { params: any }) {
  const books: Book[] = await fetchBooks();
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    return <p className="text-center text-red-500">Book not found</p>;
  }

  return <BookDetail book={book} />;
}
