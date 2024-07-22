const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/allProducts", (req, res) => {
  const db = router.db;
  const face = db.get("face").value();
  const hair = db.get("hair").value();
  const body = db.get("body").value();
  const bathroom = db.get("bathroom").value();

  const allProducts = [...face, ...hair, ...body, ...bathroom];

  res.json(allProducts);
});

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
