import express from "express";
import cors from "cors";
import TasksRoutes from "./routes/tasks.routes.js";

const app = express();
// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: "Welcome" });
})

app.use('/api/tasks', TasksRoutes);

export default app;