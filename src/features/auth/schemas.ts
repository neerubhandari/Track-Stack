import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email().trim().min(1, "Required"),
  password: z.string().min(1, "Required").max(20),
});
