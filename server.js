import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

const user = [
  { name: "Piyas", email: "apiyas221@gmail.com", phone: 4343535353 },
  { name: "Piyas", email: "apiyas221@gmail.com", phone: 4343535353 },
  { name: "Piyas", email: "apiyas221@gmail.com", phone: 4343535353 },
];

app.get("/", (req, res) => {
  res.send(user);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT} `);
});
