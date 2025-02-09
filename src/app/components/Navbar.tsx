// app/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-2xl">
          Book Store
        </Link>
        <div>
          <Link href="/" className="text-white mr-4 hover:text-gray-200">
            Home
          </Link>
          <Link href="/books" className="text-white mr-4 hover:text-gray-200">
            Books
          </Link>
          <Link href="/cart" className="text-white hover:text-gray-200">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
