import { Request, Response } from "express"

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        res.status(200).json({
            msg: 'Api node-typescript from UserController'
          });
    } catch (error) {
        res.status(500).json({
            msg: 'Error Api node-typescript from UserController'
          });
    }
}