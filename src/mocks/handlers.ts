import { rest } from "msw";
import { books } from "./constants";
import { BASE_URL } from "../api/constants";
export const handlers = [
  rest.get(`${BASE_URL}/books`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(books));
  }),
];
