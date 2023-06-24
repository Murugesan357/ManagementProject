const LeaveDetailsController = require('./leavedetails.Controller');
const LeaveDetails = require('../../models').timeOffs;
const Employee= require('../../models').employee;
const TeamLead= require('../../models').teamLeads;
const Manager= require('../../models').manager;
const Model = require('../../models');
const { leaveDetails } = require('../../services/leaveServices/leave.Service');
const department = "";

const mockRequest = () => {
    const req = {}
    req.body = jest.fn().mockReturnValue(req)
    req.params = jest.fn().mockReturnValue(req)
    return req
  }
  const mockResponse = () => {
    const res = {}
    res.send = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
  };


  jest.setTimeout(30000);
  describe('leave details Controller', () => {
  
    beforeEach(async () => {
  
      jest.restoreAllMocks();
    })
    
    test('create timeoffs', async() => {
        req = mockRequest();
        res = mockResponse();
        req.body = {userId:1, designation: "employee",startDate: "2023-06-06", endDate: "2023-06-10", reason: "family tour", reMarks: "submitted" 
        },
        // req.body = null;
        LeaveDetails.create = jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve());
        await LeaveDetailsController.applyLeave(req,res);
        expect(res.statusCode).toBe(422);
        await LeaveDetailsController.applyLeave(req,res);
        expect(res.statusCode).toBe(200);
        // expect(res.statusCode).toBe(422);
    })
    test('create timeoffs', async() => {
        req = mockRequest();
        res = mockResponse();
        // req.body = {userId:1, designation: "employee",startDate: "2023-06-06", endDate: "2023-06-10", reason: "family tour", reMarks: "submitted" 
        // },
        req.body = null;
        LeaveDetails.create = jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve());
        await LeaveDetailsController.applyLeave(req,res);
        expect(res.statusCode).toBe(422);
        
    })
    test('get leave details', async() => {
        req = mockRequest();
        res = mockResponse();
        req.params = {month:6},
        // req.body = null;
         Model.sequelize.query= jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve());
        await LeaveDetailsController.whoIsOut(req,res);
        expect(res.statusCode).toBe(422);
        await LeaveDetailsController.whoIsOut(req,res);
        expect(res.statusCode).toBe(200);
    
    })
    test('get leave details', async() => {
        req = mockRequest();
        res = mockResponse();
        // req.params = {month:6},
        req.body = null;
         Model.sequelize.query= jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve());
        await LeaveDetailsController.whoIsOut(req,res);
        expect(res.statusCode).toBe(422);
    
    })

    test('fetechout', async() => {
        req = mockRequest();
        res = mockResponse();
        req.params = {id:1},
        // req.body = null;
        LeaveDetails.findOne= jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve({}));
        department.findOne = jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve({}));
        await LeaveDetailsController.fetchOutdetails(req,res);
        expect(res.statusCode).toBe(422);
        await LeaveDetailsController.fetchOutdetails(req,res);
        expect(res.statusCode).toBe(422);
        await LeaveDetailsController.fetchOutdetails(req,res);
        expect(res.statusCode).toBe(200);
    
    
    })
    test('fetechout', async() => {
        req = mockRequest();
        res = mockResponse();
        req.params = {id:1},
        // req.body = null;
        LeaveDetails.findOne= jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve({}));
        department.findOne = jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve({}));
        await LeaveDetailsController.fetchOutdetails(req,res);
        expect(res.statusCode).toBe(422);
        await LeaveDetailsController.fetchOutdetails(req,res);
        expect(res.statusCode).toBe(422);
        await LeaveDetailsController.fetchOutdetails(req,res);
        expect(res.statusCode).toBe(200);
    
    
    })
    test('fetechout', async() => {
        req = mockRequest();
        res = mockResponse();
        req.params = {id:1},
        // req.body = null;
        LeaveDetails.findOne= jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValueOnce(Promise.resolve({}));
        department.findOne = jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve());
        await LeaveDetailsController.fetchOutdetails(req,res);
        expect(res.statusCode).toBe(422);
        await LeaveDetailsController.fetchOutdetails(req,res);
        expect(res.statusCode).toBe(422);
        await LeaveDetailsController.fetchOutdetails(req,res);
        expect(res.statusCode).toBe(200);
    
    
    })
    test('fetechout', async() => {
        req = mockRequest();
        res = mockResponse();
        req.params = null;
        LeaveDetails.findOne= jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        department.findOne = jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve({}));
        await LeaveDetailsController.fetchOutdetails(req,res);
        expect(res.statusCode).toBe(422);
    }) 


});

