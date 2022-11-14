import * as Joi from "joi";

export const cakeSchema = Joi.object({
  name: Joi.string().min(2).required(),
  price: Joi.number().positive().required(),
  description: Joi.string().allow("").required(),
});

export const cakeImageURLSchema = Joi.object({
  image: Joi.string().uri().required(),
});

export declare type Cake = {
  id?: number;
  name: string;
  price: number;
  description?: string;
  image: string;
};