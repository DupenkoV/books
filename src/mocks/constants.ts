import { nanoid } from '@reduxjs/toolkit';
import { BooksDto } from "../types";


export const books: BooksDto[] = [
  {
    authors: [{ name: "Хавербеке", surname: "Марейн" }],
    numberOfPages: 480,
    title: "Выразительный JavaScript",
    publishingHouse: "Питер",
    releaseDate: "2003",
    publishingDate: "2021",
    image: "https://ir.ozone.ru/s3/multimedia-4/wc700/6087802960.jpg",
    isbn: "5-4461-1226-1",
    id: nanoid()
  },
  {
    authors: [{ name: "Алексей", surname: "Васильев" }],
    numberOfPages: 700,
    title: "JavaScript в примерах",
    publishingHouse: "Эксмо",
    releaseDate: "2017",
    publishingDate: "2022",
    image: "https://ir.ozone.ru/s3/multimedia-i/wc700/6450772938.jpg",
    id: nanoid(),
  },
  {
    authors: [{ name: "Кэй", surname: "Хорстман" }],
    numberOfPages: 288,
    title: "Современный JavaScript",
    publishingHouse: "Питер",
    releaseDate: "2021",
    publishingDate: "2021",
    image: "https://ir.ozone.ru/s3/multimedia-7/wc700/6570899455.jpg",
    isbn: "978-5-97060-177-8",
    id: nanoid()
  },
  {
    authors: [{ name: "Адитья", surname: "Бхаргава" }],
    numberOfPages: 288,
    title: "Грокаем алгоритмы",
    publishingHouse: "Питер",
    releaseDate: "2011",
    publishingDate: "2022",
    image: "https://ir.ozone.ru/s3/multimedia-6/wc700/6276173898.jpg",
    isbn: "978-5-4461-0923-4",
    id: nanoid()
  },
  {
    authors: [
      { name: "Алекс", surname: "Бэнкс" },
      { name: "Ева", surname: "Порселло " },
    ],
    numberOfPages: 320,
    title: "React: современные шаблоны",
    publishingHouse: "Питер",
    releaseDate: "2017",
    publishingDate: "2021",
    image: "https://ir.ozone.ru/s3/multimedia-1/wc700/6102335545.jpg",
    isbn: "978-5-4461-1492-4",
    id: nanoid()
  },
];
