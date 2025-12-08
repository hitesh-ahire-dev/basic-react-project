import { createContext, useContext } from "react"

// TodoContext
// This file defines the context used by the todo app. It exports:
// - `TodoContext`: the context object with a default shape (useful for autocompletion / docs)
// - `useTodo`: a small hook that components can call to access the context value
// - `TodoProvider`: alias for `TodoContext.Provider` so components can wrap parts of the tree

// Default context value (only used when a provider is not present).
// It documents the expected state shape and available actions that the provider should supply.
export const TodoContext = createContext({
    // `todos` is an array of todo items. Each item typically has:
    // - `id`: unique identifier
    // - `todo`: the text/content of the todo
    // - `completed`: boolean flag
    todos: [],
    // Action stubs: providers should supply implementations for these.
    // - `addTodo(todo)`: add a new todo object or text
    addTodo: (todo) => { },
    // - `updateTodo(id, todo)`: update an existing todo's text/content
    updateTodo: (id, todo) => { },
    // - `deleteTodo(id)`: remove a todo by id
    deleteTodo: (id) => { },
    // - `toggleComplete(id)`: toggle the completed flag for a todo
    toggleComplete: (id) => { }
})


// Custom hook: consume the TodoContext value in function components.
// Usage: const { todos, addTodo, deleteTodo } = useTodo()
export const useTodo = () => {
    return useContext(TodoContext)
}

// Convenience export: components can use `TodoProvider` to wrap the tree.
export const TodoProvider = TodoContext.Provider