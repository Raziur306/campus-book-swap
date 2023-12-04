import { jwtVerify } from "jose";

export const verifyToken = async (token: string) => {
  if (!token) {
    return;
  }
  const secret = new TextEncoder().encode(
    process.env.NEXT_PUBLIC_JWT_PRIVATE_KEY
  );
  try {
    const { payload, protectedHeader } = await jwtVerify(token, secret);
    return payload;
  } catch (error: any) {
    console.error("Token verification error:", error.message);
  }
};
