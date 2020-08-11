import EmployeeMySql from '../employee/repositories/employeeMysql'
import {EmployeeInterface} from  '../employee/models/EmployeeInterface'

export default class EmployeeProvider{
    protected EmployeeMysql: any ;

    constructor()
    {
        this.EmployeeMysql = new EmployeeMySql();
    }
    public async getEmployeesDetail() {
        return this.EmployeeMysql.getEmployeesDetail();
      }

      public async getEmployeesDetailById(id:String) {
        return this.EmployeeMysql.getEmployeesDetailById(id);
      }

    public async createEmployee(data:EmployeeInterface){
        return this.EmployeeMysql.createEmployee(data);
    }
    public async deleteEmployeeDetail(data:String){
      return this.EmployeeMysql.deleteEmployeeDetail(data);
  }
  public async updateEmployeeDetail(id:String,data:EmployeeInterface){
    return this.EmployeeMysql.updateEmployeeDetail(id,data);
}
    

}