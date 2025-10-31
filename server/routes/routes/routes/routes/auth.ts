import { Router, Request, Response } from "express";

const router = Router();

// Simple temporary in-memory storage for demo
interface User {
  name: string;
  email: string;
  password: string;
}
const users: User[] = [];

// ✅ Register route
router.post("/register", (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  users.push({ name, email, password });
  res.json({ message: "User registered successfully", users });
});

// ✅ Login route
router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  res.json({ message: `Welcome back, ${user.name}!` });
});

export default router;
