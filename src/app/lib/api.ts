// app/lib/api.ts
export interface Book {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  }
  
  export const fetchBooks = async (): Promise<Book[]> => {
    const apiPrefix = process.env.NEXT_PUBLIC_API_PREFIX;
    if (!apiPrefix) {
      throw new Error("NEXT_PUBLIC_API_PREFIX is not defined");
    }
    try {
      const res = await fetch(`${apiPrefix}books`);
      if (!res.ok) throw new Error("Failed to fetch books");
      return await res.json();
    } catch (error) {
      console.error("Error fetching books:", error);
      return [];
    }
  };
  