const { Router } = require("express");

const router = new Router();

router.get("/hi/:name", (request, response) => {
  const name = request.params.name;
  response.send(`Hi! ${name}`);
});

module.exports = router;
