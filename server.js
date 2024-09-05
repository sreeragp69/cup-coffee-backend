require('dotenv').config()

const express = require("express");
const cors =require("cors")

const authRoute = require("./router/auth_router");
const contactRoute =require("./router/contact_router")
const serviceRoute = require("./router/service_router")
const adminRoute = require("./router/admin_router")
const app = express();

const connectDB = require("./utils/db");
const errorMiddleware = require('./middlewares/error_middleware');

// *HANDLE CORS POLICY
const corsOption ={
  origin:"http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials:true
}
app.use(cors(corsOption))


app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form",contactRoute)
app.use("/api/data", serviceRoute)

//* DEFINE ADMIN ROUTE
app.use("/api/admin",adminRoute)


app.use(errorMiddleware)

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server runnig at port: ${PORT}`);
  });
});
