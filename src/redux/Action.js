import { ADD, COMPLETE, DELETE, EDIT, FILTER } from "./ActionTypes";

export const del = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

export const comp = (id) => {
  return {
    type: COMPLETE,
    payload: id,
  };
};

export const add = (newTask) => {
  return {
    type: ADD,
    payload: newTask,
  };
};

export const edit = (editTask) => {
  return {
    type: EDIT,
    payload: editTask,
  };
};

export const filterTask = () => {
  return {
    type: FILTER,
  };
};
