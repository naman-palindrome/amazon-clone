const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51HoFxVBNyXpZh0EroAeoaKgmopJz0bHHFD03sqLoD2y1QteVuyO7evp4AB8dDoLW8cL4vFWIe1rJoaxZEFNZTAUK004S9XzffM"
);

//app config
const app = express();

//middlewares

app.use(cors({ origin: true }));
app.use(express.json());
//api routes

app.get("/", (request, response) => response.status(200).send("hellow world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved=>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  console.log(paymentIntent);
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);
