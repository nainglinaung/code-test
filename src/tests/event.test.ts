import { Request, Response, NextFunction } from 'express';
import scanController from '../controllers/scan.controller';

const { getList } = scanController;

describe('User Registration', () => {
  test('User has an invalid first name', async () => {
    const mockRequest = {
      body: {
        firstName: 'J',
        lastName: 'Doe',
        email: 'jdoe@abc123.com',
        password: 'Abcd1234',
        passwordConfirm: 'Abcd1234',
        company: 'ABC Inc.',
      },
    } as Request;

    const mockResponse: any = {
      json: jest.fn(),
      status: jest.fn(),
    };

    //   const mockNext: NextFunction = jest.fn();

    await getList(mockRequest, mockResponse);
    // console.log('aa', mockResponse);
    expect(mockResponse).toHaveBeenCalledTimes(1);
    // expect(mockNext).toHaveBeenCalledWith(
    //   new Error('First name must be between 2 and 50 characters')
    // );
  });
});
