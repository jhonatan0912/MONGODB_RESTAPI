import { Router } from "express";
import { createTask, findAllTasks, findOneTask, findAllDoneTasks, updateTask, deleteTask } from "./../controllers/task.controller.js";

const router = Router();

router.get('/', findAllTasks);

router.post('/', createTask);

router.get('/done', findAllDoneTasks)

router.get('/:id', findOneTask);

router.delete('/:id', deleteTask);

router.patch('/:id', updateTask)


export default router;