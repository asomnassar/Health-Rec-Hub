import { Request } from "express";

interface AuthorizationRequestTypes extends Request {
  userData?: string;
}

export default AuthorizationRequestTypes;
