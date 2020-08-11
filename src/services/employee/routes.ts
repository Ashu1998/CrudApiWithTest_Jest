import { Request, Response } from "express";
import {EmployeeController} from '../employee/controllers/epmloyeeControllers'
export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const result = await EmployeeController.getEmployeeDetail(req,res)
      res.status(200).json(result);
    }
  },
  {
    path : "/",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const result = await EmployeeController.insertNewEmployee(req,res)
      console.log(result);
      res.status(200).json(result);
    }
  },
  {
    path : "/:id",
    method: "get",
    handler: async (req:Request,res:Response) =>{
      const result = await EmployeeController.getEmployeeDetailById(req,res)
      res.status(200).json(result);

    }
  },

  {
    path : "/:id",
    method: "delete",
    handler: async (req:Request,res:Response) =>{
      const result = await EmployeeController.deleteEmployeeDetail(req,res)
      res.status(200).json(result);

    }
  },

  {
    path : "/:id",
    method: "put",
    handler: async (req:Request,res:Response) =>{
      const result = await EmployeeController.updateEmployee(req,res)
      res.status(200).json(result);

    }
  }
];