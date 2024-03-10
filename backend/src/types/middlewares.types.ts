import { Request } from "express";

interface AuthorizationRequestTypes extends Request {
  userData?: string;
  file?: any;
}

export default AuthorizationRequestTypes;
