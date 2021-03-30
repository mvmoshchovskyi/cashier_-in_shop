import { query, Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from '../database'

export const getAllCashiers = async (req: Request, res: Response): Promise<Response> => {
 try {
  const response: QueryResult = await pool.query('SELECT * FROM cashier')
  res.status(200).json(response.rows)
 } catch (e) {
  console.log(e);
  return res.status(500).json('internal server error');

 }
}

export const getCashierById =async(req:Request, res:Response):Promise<Response>=>{
try{
  const id = parseInt(req.params.id)
  const repsponse : QueryResult = await pool.query('SELECT * FROM cashier WHERE ID = $1', [id]);

} catch (e) {
 console.log(e);
   return res.status(500).json('internal server error');

}
}
export const createCashier = async (req: Request, res: Response): Promise<Response> => {
  try {

  } catch (e) {
    console.log(e);
    return res.status(500).json('internal server error');

  }
}
export const updateCashier = async (req: Request, res: Response): Promise<Response> => {
 try {

 } catch (e) {
  console.log(e);
  return res.status(500).json('internal server error');

 }
}
export const removeCashier = async (req: Request, res: Response): Promise<Response> => {
 try {

 } catch (e) {
  console.log(e);
  return res.status(500).json('internal server error');

 }
}
