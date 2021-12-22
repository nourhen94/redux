import { createStore } from "redux";
import reducer from "./Reducer";

const taskStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default taskStore;
