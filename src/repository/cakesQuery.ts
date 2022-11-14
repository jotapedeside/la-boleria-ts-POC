import { Cake } from "../models/cakesSchema";

export const queryGetCakes = () => {
  return `SELECT * FROM cakes`;
};

export const queryPostCake = (cake: Cake) => {
  return `INSERT INTO "public.cakes" (name, price, image, description) VALUES ('${cake.name}', ${cake.price}, '${cake.image}', '${cake.description}')`;
};

export const queryGetCakeByName = (name: string) => {
  return `SELECT * FROM "public.cakes" WHERE name ILIKE '%${name}%'`;
};

export const queryPutCake = (cake: Cake) => {
  return `UPDATE "public.cakes" SET name = '${cake.name}', price = ${cake.price}, image = '${cake.image}', description = '${cake.description}' WHERE id = ${cake.id}`;
};

export const queryDeleteCake = (id: number) => {
  return `DELETE FROM "public.cakes" WHERE id = ${id}`;
};