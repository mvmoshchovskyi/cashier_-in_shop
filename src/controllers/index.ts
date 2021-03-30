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

export const getCashierById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const repsponse: QueryResult = await pool.query('SELECT * FROM cashier WHERE ID = $1', [id]);
    return res.status(200).json(repsponse.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json('internal server error');

  }
}
export const createCashier = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, age, sex, surname, expirience, previous_work } = req.body;
    const response: QueryResult = await pool.query('INSERT INTO cashier (name, age, sex , surname, expirience, previous_work) VALUES ($1, $2, $3, $4, $5, $6)', [name, age, sex, surname, expirience, previous_work]);
    return res.status(200).json({
      message: 'user created succesfully',
      body: {
        cashier: {
          name, age, sex, surname, expirience, previous_work
        }
      }
    })

  } catch (e) {
    console.log(e);
    return res.status(500).json('internal server error');

  }
}

export const removeCashier = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    await pool.query('DELETE FROM cashier WHERE ID = $1', [id]);
    return res.status(200).json(`cashier ${id} was deleted sussesfully`);
  } catch (e) {
    console.log(e);
    return res.status(500).json('internal server error');

  }
}

export const updateCashier = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const { name, age, sex, surname, expirience, previous_work } = req.body;

    await pool.query('UPDATE cashier SET name  = $1, age  = $2,  sex  = $3, surname  = $4,  expirience  = $5,previous_work  = $6  WHERE id = $7', [name, age, sex, surname, expirience, previous_work, id])
    return res.status(200).json({

      message: (`cashier ${id} was updated sussesfully`),
      body: {
        cashier: {
          name, age, sex, surname, expirience, previous_work
        }
      }
    })

  } catch (e) {
    console.log(e);
    return res.status(500).json('internal server error');
  }
}
