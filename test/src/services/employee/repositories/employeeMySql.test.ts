
import DB from '../../../../../src/databaseconfig';
import EmployeeMysql from '../../../../../src/services/employee/repositories/employeeMysql';
import sinon from 'sinon';
import { HTTP400Error,HTTP404Error } from '../../../../../src/utils/httpErrors';
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
            "designation": "Tech Lead",
            "department": "Mobile"
        },
        {
            "id": 150,
            "name": "Vijay",
            "company": "Xoxoday",
            "designation": "Tech Lead",
            "department": "Integration"
        }
		]
		const data = {
			"id": 150,
			"name": "VShantanu",
			"company": "Xoxoday",
			"designation": "Software Engineer",
			"department": "Integration"
	}

	const updateData = {
		"id": 160,
		"name": "VShantanu",
		"company": "Xoxoday",
		"designation": "Software Engineer",
		"department": "Integration"
}

		const expectedResult_insertQuery = { message: 'Data inserted Successfully' }
		const expectedResult_deleteQuery = {message: "Data Deleted Successfully"}
		const expectedResult_updateQuery = {message: "Data Updated Successfully"};

      afterEach(async()=>{
        sinon.restore();
      });

    describe('Retreive Employee Details',()=>{
        it('Retreiving Details of EMployee',async ()=>{
            sinon.stub(DB, 'executeQuery').callsFake(async (options) => {
                return expectedResult_getQuery
              });
					 const result = await employee.getEmployeesDetail();
					 
           expect(result).toEqual(expectedResult_getQuery);     
        });
		});

		describe('Retreive Employee Details',()=>{
			it('testing error handling in employeedetails query',async ()=>{
					sinon.stub(DB, 'executeQuery').callsFake(async (options) => {
							return []
						});
						try{
							 await employee.getEmployeesDetail();

						}
						catch(err)
						{
							expect(err).toBeInstanceOf(HTTP404Error);
						}    
			});
	});

		describe('Inserting New EMployee Details',()=>{
			it('testing insert query', async()=>{
				sinon.stub(DB,'executeQuery').callsFake(async (options)=>{
						return []
				});
				 const result = await employee.createEmployee(data);
				 expect(result).toEqual(expectedResult_insertQuery);
			})
		});

		describe('Getting Employee Data by Id',()=>{
			it('testing employeeDetailById query', async()=>{
				sinon.stub(DB,'executeQuery').callsFake(async (options)=>{
						return [data]
				});
				 const result = await employee.getEmployeesDetailById('150');
				 expect(result).toEqual(data);
			})
		})


		describe('Retreive Employee Details',()=>{
			it('testing error handling in employeeDetailsById query',async ()=>{
					sinon.stub(DB, 'executeQuery').callsFake(async (options) => {
							return []
						});
						try{
							 await employee.getEmployeesDetailById('1564');

						}
						catch(err)
						{
							expect(err).toBeInstanceOf(HTTP404Error);
						}    
			});
	});

		describe('Deleted Employee Data by Id',()=>{
			it('testing deleting query', async()=>{
				sinon.stub(DB,'executeQuery').callsFake(async (options)=>{
						return []
				});
				 const result = await employee.deleteEmployeeDetail('150');
				 expect(result).toEqual(expectedResult_deleteQuery);
			})
		});

		describe('Deleted Employee Data by Id',()=>{
			it('testing error handling in deleteEmployeeDetail query',async ()=>{
					sinon.stub(DB, 'executeQuery').callsFake(async (options) => {
							return []
						});
						try{
							 await employee.deleteEmployeeDetail('1564');

						}
						catch(err)
						{
							expect(err).toBeInstanceOf(HTTP400Error);
						}    
			});
	});

		describe('Update Employee Data by Id',()=>{
			it('testing update query', async()=>{
				sinon.stub(DB,'executeQuery').callsFake(async (options)=>{
						return []
				});
				 const result = await employee.updateEmployeeDetail('150',updateData);
				 expect(result).toEqual(expectedResult_updateQuery);
			})
		});

		describe('Update Employee Data by Id',()=>{
			it('testing error handling in updateEmployeeDetail query',async ()=>{
					sinon.stub(DB, 'executeQuery').callsFake(async (options) => {
							return []
						});
						try{
							 await employee.updateEmployeeDetail('1564',data);

						}
						catch(err)
						{
							expect(err).toBeInstanceOf(HTTP400Error);
						}    
			});
	});
});



