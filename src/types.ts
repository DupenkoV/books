export interface BooksDto {
  title: string;
  authors: AuthorType[];
  numberOfPages: number;
  publishingHouse?: string;
  releaseDate?: string;
  publishingDate?: string;
  isbn?: string;
  image?: string;
  id: string;
}

export interface AuthorType {
  name: string;
  surname: string;
}
