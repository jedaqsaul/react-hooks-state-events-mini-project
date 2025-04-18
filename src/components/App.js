import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
