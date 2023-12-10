import { useState } from "react";
import { useTodo } from "../Context/TodoContext";

function TodoForm() {
  const [todotitle, setTodotitle] = useState("");
  const { addTodo } = useTodo();

  const handleTodo = (e) => {
    e.preventDefault();
    if (!todotitle) return;
    addTodo({ todotitle });
  };

  return (
    <form className="flex" onSubmit={handleTodo}>
      <input
        type="text"
        placeholder="Write Todo..."
        id="todoTitleInput"
        value={todotitle}
        onChange={(e) => {
          setTodotitle(e.target.value);
        }}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
