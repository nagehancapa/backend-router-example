const { Router } = require("express");

const router = new Router();

const teachers = ["matias", "karla"];

router.get("/teacher", (request, response) => response.send(teachers));

module.exports = router;
