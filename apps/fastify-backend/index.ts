import fastify from "fastify";
import { Phone } from "@phone_catalog/common_tooling";
import data from "./db/contacts.json";

const app = fastify();

app.register(import("fastify-cors"), {
  // put your options here
  // corsOptions: false,
  origin: ["http://localhost:3000", "https://catalog.leito.dev/"],
});

app.get("/phones", async (request, reply) => {
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
