import { ADD, COMPLETE, DELETE, EDIT, FILTER } from "./ActionTypes";

const init = {
  todos: [
    { id: Math.random(), action: "learn HTML", isDone: true },
    { id: Math.random(), action: "learn Redux", isDone: false },
  ],
  filter: false,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case DELETE:
      return { ...state, todos: state.todos.filter((el) => el.id !== payload) };
    case COMPLETE:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case ADD:
      return { ...state, todos: [...state.todos, payload] };

    case EDIT:
      return {
        ...state,
        todos: [
          ...state.todos.map((el) => (el.id === payload.id ? payload : el)),
        ],
      };

    case FILTER:
      return {
        ...state,
        filter: !state.filter,
      };

    default:
      return state;
  }
};
export default reducer;
