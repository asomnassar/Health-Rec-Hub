import { Request } from "express";

interface AuthorizationRequestTypes extends Request {
  patientStatus?: string;
  userData?: string;
  file?: any;
}

export default AuthorizationRequestTypes;
