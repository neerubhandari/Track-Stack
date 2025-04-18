import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email().trim().min(1, "Required"),
  password: z.string().min(1, "Required").max(20),
});

export const SignUpSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  email: z.string().email().trim().min(1, "Required"),
  password: z.string().min(1, "Required").max(20),
});
