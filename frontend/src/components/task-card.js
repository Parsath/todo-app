import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { removeTask, updateTask } from "../services/todo.services";

export default function TaskCard({ task }) {
  const queryClient = useQueryClient();
  // Mutations
  const removeMutation = useMutation(removeTask, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("tasks");
    },
  });
  const updateMutation = useMutation(updateTask, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("tasks");
    },
  });
  const [status, setStatus] = useState(task.status);

  const handleOptionChange = (event) => {
    console.log(status);
    console.log(task);
    setStatus(event.target.value);
    console.log(status);
    updateMutation.mutate({ id: task.id, newStatus: event.target.value });
  };

  const handleDelete = (event) => {
    console.log(status);
    console.log(task);
    removeMutation.mutate(task.id);
  };

  return (
    <div
      className={`w-full h-24 mb-2 p-3 rounded-xl shadow-lg ${
        task.status === "done" && "bg-green-100"
      }  ${task.status === "doing" && "bg-blue-100"}  ${
        task.status === "todo" && "bg-gray-100"
      }`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1>{task.title}</h1>
        <div className="flex flex-col justify-evenly items-center">
          <label>
            <input
              onChange={handleOptionChange}
              type="radio"
              value="todo"
              checked={status === "todo"}
            />
            Todo
          </label>
          <label>
            <input
              onChange={handleOptionChange}
              type="radio"
              value="doing"
              checked={status === "doing"}
            />
            Doing
          </label>
          <label>
            <input
              onChange={handleOptionChange}
              type="radio"
              value="done"
              checked={status === "done"}
            />
            Done
          </label>
        </div>
        <div className="">
          <button
            className={`bg-red-100 py-3 px-6 rounded-full shadow-lg`}
            onClick={handleDelete}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
