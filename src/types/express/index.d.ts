import "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        _id:string,
        name: string;
        age: string;
        grade: string;
        email: string;
      };
    }
  }
}
