
/** ---- Required External Modules  ---- **/
 
const express = require("express");
const path = require("path");


/** ---- App Variables ---- **/

const app = express();
const port = process.env.PORT || "8000";

 

/** ---- App Configuration ---- **/

// pug render template used instead of static html 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// uses express.static(), a built-in middleware function
app.use(express.static(path.join(__dirname, "public")));

/**  ---- Routes Definitions ---- **/

 app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

/** ---- Server Activation ---- **/

 app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});