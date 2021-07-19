import { types } from "mobx-state-tree";
import { v4 as uuidv4 } from 'uuid'

export const Todo = types
  .model("Todo", {
    id: types.optional(types.string, () => uuidv4()),
    title: types.string,
    done: false
  })
  .actions(self => ({
    toggle() {
      self.done = !self.done;
    }
  }));

export const TodoStore = types
  .model("TodoStore", {
    todos: types.array(Todo)
  })
  .views(self => ({
    get TasksToGo() {
      return self.todos.filter(todo => !todo.done).length;
    },
    tasksFilter(filterValue: string) {
        return self.todos.filter((task) => task.title.toLowerCase().includes(filterValue))
    }
  }))
  .actions(self => ({
    addTodo(title: any) {
      self.todos.push({ title })
    }
  }));
