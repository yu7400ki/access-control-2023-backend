import { OpenAPIHono } from "@hono/zod-openapi";
import programIdHandler from "./_programId";

const handler = new OpenAPIHono();

handler.route("/:id", programIdHandler);

export default handler;
