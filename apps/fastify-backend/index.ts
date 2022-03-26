import fastify from "fastify";
import { Phone } from "@phone_catalog/common_tooling";
import data from "./db/contacts.json";

const app = fastify();

app.get("/phones", async () => {
  const jsonContact: Phone[] = data;

  return jsonContact;
});

app.post("/phones", async (request, reply) => {
  const jsonContact: Phone[] = data;
  const newPhone: unknown = request?.body;

  return jsonContact;
});

app.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

export const viteNodeApp = app;
