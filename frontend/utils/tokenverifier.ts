import { jwtVerify } from "jose";

export const verifyToken = async (token: string) => {
  const secret = new TextEncoder().encode(
    process.env.NEXT_PUBLIC_JWT_PRIVATE_KEY
  );
  const { payload, protectedHeader } = await jwtVerify(token, secret);
  return payload;
};
