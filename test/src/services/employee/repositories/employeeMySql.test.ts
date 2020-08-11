
import DB from '../../../../../src/databaseconfig';
import EmployeeMysql from '../../../../../src/services/employee/repositories/employeeMysql';
import sinon from 'sinon';

describe('Employee', ()=>{
    const employee = new EmployeeMysql()

    const expectedResult_getQuery = [
        {
            "id": 100,
            "name": "Ashu",
            "company": "Xoxoday",
            "designation": "Software Engineer",
            "department": "Integration"
        },
        {
            "id": 101,
            "name": "Kuldeep",
            "company": "Xoxoday",
            "designation": "Software Engineer",
            "department": "Mobile"
        },
        {
            "id": 150,
            "name": "Vijay",
            "company": "Xoxoday",
            "designation": "Software Engineer",
            "department": "Integration"
        }
    ]
      afterEach(async()=>{
        sinon.restore();
      });

    describe('Retreive Employee Details',()=>{
        it('Retreiving Details of EMployee',async ()=>{
            sinon.stub(DB, 'executeQuery').callsFake(async (options) => {
                return []
              });
           const result = await employee.getEmployeesDetail();
           console.log(result)
           expect(result).toEqual(expectedResult_getQuery);
              




            
              
        });
    });

});