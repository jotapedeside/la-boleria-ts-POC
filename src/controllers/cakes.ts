import connection from '../database/connection';
import { Request, Response } from 'express';
import { queryGetCakes, queryGetCakeByName, queryPostCake, queryPutCake, queryDeleteCake } from '../repository/cakesQuery';

export const getCakes = async (req: Request, res: Response) => {
  try {
    const cakes = await connection.query(queryGetCakes());

    if(cakes.rowCount <= 0) {
      return res.status(404).json({ status: 404, message: cakes.rows });
    }

    res.status(200).json({status: 200, cakes: cakes.rows});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postCake = async (req: Request, res: Response) => {
  try {
    const cake = req.body;
    
    const cakeName = await connection.query(queryGetCakeByName(cake.name));
    if(cakeName.rowCount > 0) {
      return res.status(409).json({ status: 409, message: "This cake already exists" });
    }

    connection.query(queryPostCake(cake));
    res.status(201).json({ status: 201, message: 'Cake created successfully' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const putCake = async (req: Request, res: Response) => {
  try {
    const cake = req.body;

    const cakeName = await connection.query(queryGetCakeByName(cake.name));
    if(cakeName.rowCount <= 0) {
      return res.status(404).json({ status: 404, message: "This cake does not exist" });
    }

    connection.query(queryPutCake(cake));
    res.status(200).json({ status: 200, message: 'Cake updated successfully' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteCake = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const cake = await connection.query(queryDeleteCake(id));
    if(cake.rowCount <= 0) {
      return res.status(404).json({ status: 404, message: "This cake does not exist" });
    }
    
    res.status(200).json({ status: 200, message: 'Cake deleted successfully' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};