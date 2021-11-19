const express = require("express");

const app = express();
const PORT = 8000;

app.post("/login", (req, res, next) => {});

app.use((req, res, next) => {});

app.listen(PORT);
