import { useState } from "react";
import { BooksDto } from "../types";
import { DataService } from "../api/services/DataService";

export const useGetBooks = () => {
  const dataService = new DataService();
  const [books, setBooks] = useState<BooksDto[]>([]);

  const fetchBooks = async () => {
    const booksFromBack = await dataService.getBooks();
    setBooks(booksFromBack);
  };
  return {
    books,
    setBooks,
    fetchBooks,
  };
};
