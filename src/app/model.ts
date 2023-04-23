export interface IToDo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export class ToDo implements IToDo {
  constructor(
    public title: string,
    public isCompleted = false,
    public id = 0
  ) {}
}

export const initialState = [
  new ToDo('One', false, 1),
  new ToDo('Two', true, 2),
];

export const toggleTodo = (list: ToDo[], todoToToggle: ToDo): ToDo[] => {
  return list.map((todo) => {
    if (todo.title === todoToToggle.title) {
      return {
        ...todo,
        isCompleted: !todoToToggle.isCompleted,
      };
    }
    return todo;
  });
};
