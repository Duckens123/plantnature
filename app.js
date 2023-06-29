const path = require("path");
const { engine } = require("express-handlebars");
const express = require("express");
const { plants } = require("./utils/plants");

const app = express();
const port = 3000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
//app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.get("/plants", (req, res) => {
  const { page } = req.query;
  //console.log(req.query);
  //console.log(page);
  if (isNaN(page)) return res.send("page must be a number");

  plants(page, (err, data) => {
    if (err) res.send(`Une erreur s'est produite ${err}`);
    res.send(data.data);
        // data.data.map((item, i) => {
        // console.log(item.id,i)
        // })

  });
});

app.use((req, res, next) => {
  res.status(404).send("Page not found!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Erreur, Regardez le terminal!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
