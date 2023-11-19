import { JwtPayload } from "jsonwebtoken";

export interface JwtDecodedType extends JwtPayload {
  id: string;
}