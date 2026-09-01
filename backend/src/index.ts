import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { userRoutes } from "./routes/userRoutes.js";
import { teamRoutes } from "./routes/teamRoutes.js";
import { authRoutes } from "./routes/authRoutes.js";
import { bookingRoutes } from "./routes/bookingRoutes.js";
import { ratingRoutes } from "./routes/ratingRoutes.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Gør public-mappen tilgængelig som statisk
app.use("/images", express.static(path.join(__dirname, "/assets")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/ratings", ratingRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
