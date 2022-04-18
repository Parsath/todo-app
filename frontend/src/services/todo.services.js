const fetchTasks = async () => {
  const res = await fetch("http://localhost:3000/todo");
  return res.json();
};

const fetchStats = async () => {
  const res = await fetch("http://localhost:3000/todo/stats");
  return res.json();
};

const createTask = async (task) => {
  const res = await fetch(`http://localhost:3000/todo`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(task), // body data type must match "Content-Type" header
  }).catch((err) => console.log(err));

  return res.json();
};

const removeTask = async (id) => {
  const res = await fetch(`http://localhost:3000/todo/${id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return res.json();
};

const updateTask = async (data) => {
  const res = await fetch(`http://localhost:3000/todo/status/${data.id}`, {
    method: "PATCH", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: data.newStatus }), // body data type must match "Content-Type" header
  }).catch((err) => console.log(err));

  return res.json();
};

export { createTask, fetchTasks, fetchStats, removeTask, updateTask };
