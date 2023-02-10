import { Request, Response, NextFunction } from "express";

export const verifyManager = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isManager) {
    return res.status(403).json({
      message: "You are not authorized to access this route",
    });
  }
  return next();
};
