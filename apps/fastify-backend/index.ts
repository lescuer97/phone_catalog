import fastify, { FastifyRequest } from "fastify";
import { Phone } from "@phone_catalog/common_tooling";
import data from "./db/contacts.json";

const app = fastify();

app.register(import("fastify-cors"), {
  origin: ["http://localhost:3000", /\.leito\.dev$/],
});

app.get("/phones", async (request: FastifyRequest, reply) => {
  const jsonContact: Phone[] = data;
  reply.send(jsonContact);
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

export const viteNodeApp = app;
