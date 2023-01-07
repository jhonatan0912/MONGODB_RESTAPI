import Task from "./../models/Task.js";
import { getPagination } from "./../libs/getPagination.js";

export const findAllTasks = async (req, res) => {
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);
    const tasks = await Task.paginate({}, { offset, limit });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message || 'something goes wrong'
    });
  }
}

export const createTask = async (req, res) => {
  try {
    const newTask = new Task(
      {
        title: req.body.title,
        description: req.body.description,
        done: req.body.done ? req.body.done : false,
      }
    );
    const taskSaved = await newTask.save();
    res.json(taskSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || 'something goes wrong'
    });
  }
}

export const findAllDoneTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ done: true })
    res.json(tasks)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'something goes wrong'
    });
  }
}

export const findOneTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    res.json(task)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'something goes wrong'
    });
  }
}

export const updateTask = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Task was successfully updated" })
  } catch (error) {
    res.status(500).json({
      message: error.message || 'something goes wrong'
    });
  }
}

export const deleteTask = async (req, res) => {
  try {
    const data = await Task.findByIdAndDelete(req.params.id);
    res.json({ "message": `Task were deleted succesfully` })
  } catch (error) {
    res.status(500).json({
      message: error.message || 'something goes wrong'
    });
  }
}