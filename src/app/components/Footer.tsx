// app/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Book Store. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  