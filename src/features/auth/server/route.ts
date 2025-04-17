import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { LoginSchema } from "../schemas";

const app = new Hono().post(
  "/login",
  zValidator("json", LoginSchema),
  async (c) => {
    const { email, password } = c.req.valid("json");
    console.log({ email, password });
    return c.json({ success: "ok" });
  }
);
export default app;
