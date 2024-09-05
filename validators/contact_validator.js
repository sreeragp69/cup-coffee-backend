const { z } = require("zod");

const contactSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "name at least 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters." }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email must be at least 3 characters." })
    .max(255, { message: "Email must not be more than 255 characters." }),

  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(3, { message: "Message must be at least 3 characters." })
    .max(1000000, {
      message: "Email must not be more than 1000000 characters.",
    }),
});

module.exports = contactSchema