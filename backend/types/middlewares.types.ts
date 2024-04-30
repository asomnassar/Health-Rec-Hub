import { Request } from "express";

interface AuthorizationRequestTypes extends Request {
  patientStatus?: string;
  userData?: string;
  userType?: string;
  file?: any;
}

export default AuthorizationRequestTypes;
