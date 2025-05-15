import "dotenv/config";
import express, { Application, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const PORT = process.env.PORT || 5000;
const BASE_PATH = "/api/v1";

const app: Application = express();
const prisma = new PrismaClient();

app.use(express.json());

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Prisma with Express!");
});

// Fetch all users
app.get(`${BASE_PATH}/users`, async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching users" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Close the Prisma client when the app is terminated
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
