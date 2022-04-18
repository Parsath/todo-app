import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { createTask } from "../services/todo.services";

export default function TaskInput() {
  const queryClient = useQueryClient();
  // Mutations
  const mutation = useMutation(createTask, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("tasks");
    },
  });
  const [title, setTitle] = useState("");

  const handleTitleChange = (changeEvent) => {
    setTitle(changeEvent.target.value);
  };

  const submitTitle = () => {
    console.log(`title: ${title}`);
    // createTask({ title: title, status: "todo" });

    mutation.mutate({
      title,
      status: "todo",
    });

    setTitle("");
  };

  return (
    <div
      className={`w-full h-40 p-5 rounded-xl shadow-lg flex flex-col items-center justify-around`}
    >
      <input
        type="text"
        className="border border-gray-400 rounded-lg p-2 w-4/5"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter task here..."
      />
      {mutation.isLoading && "Task loading..."}

      {mutation.isLoading || (
        <button
          className={`py-3 px-6 bg-green-400 rounded-lg shadow-lg text-white`}
          onClick={submitTitle}
        >
          Submit
        </button>
      )}
    </div>
  );
}
