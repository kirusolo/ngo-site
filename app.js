const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/shop.html", function (req, res) {
  res.sendFile(__dirname + "/services.html");
});

app.get("/product.html", function (req, res) {
  res.sendFile(__dirname + "/aboutus.html");
});

app.get("/checkout.html", function (req, res) {
  res.sendFile(__dirname + "/whystudyabroad.html");
});

app.get("/contact.html", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});
app.post("/contact.html", function (req, res) {
  var Name = req.body.name;
  var Email = req.body.email;
  var Cmt = req.body.comment;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tensuabita0@gmail.com",
      pass: "tensu@208531",
    },
  });
  var mailOption = {
    from: Email,
    to: "tensuabita0@gmail.com",
    replyTo: Email,
    subject: Name,
    text: Cmt,
  };
  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      res.sendFile(__dirname + "/failure.html");
    } else {
      res.sendFile(__dirname + "/success.html");
    }
  });
});

app.listen(8080 || process.env.PORT, function () {
  console.log("server running on port 8080");
});
