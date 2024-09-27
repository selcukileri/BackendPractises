import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello Selcuk<h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Selçuk</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +905319266298</p>");
});

app.get("/loveswho", (req,res) => {
  res.send("<h1>Beyzanur</h1>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
