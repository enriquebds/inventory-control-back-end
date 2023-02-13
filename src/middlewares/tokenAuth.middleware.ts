import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const tokenAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization?.split(" ")[1];

  jwt.verify(
    token as string,
    process.env.SECRET_KEY as string,
    (err: any, decoded: any) => {
      if (err) {
        return res.status(403).json({
          message: "Invalid token",
        });
      }

      req.user = {
        email: decoded.email,
        isManager: decoded.isManager,
      };
      return next();
    }
  );
};

export default tokenAuthMiddleware;
