import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { LoginSchema, SignUpSchema } from "../schemas";

const app = new Hono()
  .post("/login", zValidator("json", LoginSchema), async (c) => {
    const { email, password } = c.req.valid("json");
    console.log({ email, password });
    return c.json({ success: "ok" });
  })
  .post("/register", zValidator("json", SignUpSchema), async (c) => {
    const { email, password, name } = c.req.valid("json");
    return c.json({ email, password, name });
  });
export default app;
