import { Request, Response } from 'express';
import mysql from 'mysql'
import db from '../../../databaseconfig'
import {EmployeeInterface} from '../models/EmployeeInterface'
import {HTTP400Error, HTTP404Error} from '../../../utils/httpErrors';


export default class EmployeeMysql{
	public async getEmployeesDetail(): Promise<Response | void> {
			const result = await db.executeQuery('SELECT * FROM EmployeeDetails');
			if (!result.length) {
				throw new HTTP404Error("No data found");
			  }
			return result;

	}


	public async  createEmployee(newEmployeeData:EmployeeInterface) {
		try{
			const employee = await db.executeQuery(mysql.format('INSERT INTO EmployeeDetails SET ?', [newEmployeeData]))
			return {message: "Data inserted Successfully"} ;
		}
		catch(err){
			throw new HTTP400Error({message: err.toString()});
	
		}
		
	}
	
    public async  getEmployeesDetailById(id:String) {
	
		
			const result = await db.executeQuery(mysql.format('SELECT * FROM EmployeeDetails WHERE id = ?',[id]));
			console.log(result)
			if (!result.length) {
				throw new HTTP404Error("No data found");
			  }
			  console.log(result[0])
			return result[0];
		
	}
	
	 async  deleteEmployeeDetail(id:String) {
		try{
			const employee = await  db.executeQuery(mysql.format('DELETE FROM EmployeeDetails WHERE id = ?',[id]))
			return {message: "Data Deleted Successfully"} ;
	
		}
		catch(err){
			throw new HTTP400Error({message: err.toString()});
		}
	
	}
	
	 async  updateEmployeeDetail(id:String,data:EmployeeInterface) {
		try{
			const employee = await db.executeQuery(mysql.format('UPDATE EmployeeDetails set ? WHERE id = ?', [data,id]))
			return {message: "Data Updated Successfully"} ;
		}
		catch(err){
			throw new HTTP400Error({message: err.toString()});
		}
	
	}
	
	
	

}

