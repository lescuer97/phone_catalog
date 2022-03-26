import fastify from "fastify";

const app = fastify();

app.get("/ping", async (request, reply) => {
  return "pa ng\n";
});

app.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

export const viteNodeApp = app;
