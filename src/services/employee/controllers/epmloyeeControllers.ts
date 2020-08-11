import { Request,Response } from "express";
import EmployeeProvider from '../employeeProvider'
import {EmployeeInterface} from '../models/EmployeeInterface'
export class EmployeeController{

 public static async getEmployeeDetail(req:Request ,res:Response){

    const result = await new EmployeeProvider().getEmployeesDetail()
    return result;

}
public static async getEmployeeDetailById(req:Request ,res:Response){

    const id = req.params.id;
    const result = await new EmployeeProvider().getEmployeesDetailById(id)
    return result;

}
public static async insertNewEmployee(req:Request,res:Response){
    const data:EmployeeInterface = req.body;
    const result = await new EmployeeProvider().createEmployee(data)
    return result;
}
public static async deleteEmployeeDetail(req:Request,res:Response){
    const data = req.params.id;
    const result = await new EmployeeProvider().deleteEmployeeDetail(data)
    return result;
}
public static async updateEmployee(req:Request,res:Response){
    const id = req.params.id;
    const data = req.body;
    const result = await new EmployeeProvider().updateEmployeeDetail(id,data)
    return result;
}

}