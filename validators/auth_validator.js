const { z } = require("zod");

//* CREATE AN OBJECT SCHEMA

const logInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email address" })
    .min(3, { message: "Email must be at least 3 characters." })
    .max(255, { message: "Email must not be more than 255 characters." }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be at least 7 characters" })
    .max(1024, { message: "Password can't be greater than 1024 characters" }),
});

//? REGISTRATION
const signupSchema = z.object({
  //* USERNAME
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(255, { message: "Name must not be more than 255 characters." }),

  //* EMAIL
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email address" })
    .min(3, { message: "Email must be at least 3 characters." })
    .max(255, { message: "Email must not be more than 255 characters." }),

  //* PHONE
  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters." })
    .max(20, { message: "Phone number must not be more than 20 characters." }),

  //* PASSWORD
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least 7 characters." })
    .max(1024, { message: "Password must not be more than 1024 characters." }),
});

module.exports = { signupSchema, logInSchema };
