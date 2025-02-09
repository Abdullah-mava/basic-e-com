// app/books/[id]/page.tsx
import { fetchBooks, Book } from "@/app/lib/api";
import BookDetail from "@/app/components/BookDetail";

export default function BookDetailPage({ params }: { params: { id: string } }) {
  return fetchBooks().then((books: Book[]) => {
    const book = books.find((b) => b.id === params.id);
    if (!book) {
      return <p className="text-center text-red-500">Book not found</p>;
    }
    return <BookDetail book={book} />;
  });
}
