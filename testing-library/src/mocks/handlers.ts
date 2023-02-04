// src/mocks/handlers.js
import { rest } from "msw";

const fruits = [
  {
    id: 1,
    name: "tomato",
    price: 1000,
  },
  {
    id: 2,
    name: "apple",
    price: 1100,
  },
];
export const handlers = [
  // Handles a POST /login request
  rest.get(`/fruits`, (req, res, ctx) => {
    const name = req.url.searchParams.get("name");
    const searchResult = fruits.filter((fruit) => fruit.name === name);

    return res(ctx.json(searchResult));
  }),
];
