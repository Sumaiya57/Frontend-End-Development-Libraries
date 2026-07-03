function TaskList(){
    const tasks = [
        { id: 1, title: "learn React",          completed: true  },
    { id: 2, title: "submit Assignment", completed: false },
    { id: 3, title: "build Project",      completed: true  },
    { id: 4, title: "push GitHub",   completed: false },
    ];
    return (
    <div>
      <h2>📝 Task List</h2>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            background: task.completed ? "#e6ffe6" : "#fff8e1",  // সবুজ বা হলুদ
            margin: "8px",
            padding: "10px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <span style={{ fontSize: "24px" }}>
            {task.completed ? "✅" : "⏳"}   {/* condition check */}
          </span>
          <p style={{ margin: 0 }}>{task.title}</p>
        </div>
      ))}

      
      <p>
        Total: {tasks.length}  |
        completed: {tasks.filter(t => t.completed).length} |
        incompleted: {tasks.filter(t => !t.completed).length}
      </p>
    </div>
  );
}