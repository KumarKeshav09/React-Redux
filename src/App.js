import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ApiDataDisplay from "./components/ApiDataDisplay";
import FormDataDisplay from "./components/formDataDisplay";
import FormHook from "./components/formHook";
import ThemeBtn from "./components/ThemeBtn";
import Todo from "./components/Todo";
import AddTodo from "./components/TodoRedux/AddTodo";
import Todos from "./components/TodoRedux/todos";
import { UserProvider } from "./context/api";
import FormProvider from "./context/FormProvider";
import { store } from "./app/store";

function App() {
  console.log(store);
  return (
    <Router>
      <header className="p-4 bg-gray-800 text-white">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/context">Context Todo</Link>
            </li>
            <li>
              <Link to="/todos">Redux Todos</Link>
            </li>
            <li>
              <Link to="/formHook">Form</Link>
            </li>
            <li>
              <Link to="/ApiDataDisplay">API Data</Link>
            </li>
            <li>
              <ThemeBtn />
            </li>
          </ul>
        </nav>
      </header>

      <main className="dark:bg-black dark:text-white">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <section className="dark:bg-black dark:text-white">
                <UserProvider>
                  <FormProvider>
                    <div className="App">start</div>
                    <div>
                      <FormHook />
                      <FormDataDisplay />
                    </div>
                  </FormProvider>
                </UserProvider>
              </section>
            }
          />

          <Route
            path="/context"
            element={
              <section className="dark:bg-black dark:text-white">
                <Todo />
              </section>
            }
          />

          {/* Todos Route */}
          <Route
            path="/todos"
            element={
              <Provider store={store}>
                <div>
                  <AddTodo />
                  <Todos />
                </div>
              </Provider>
            }
          />

          {/* Form Route */}
          <Route
            path="/formHook"
            element={
              <FormProvider>
                <div>
                  <FormHook />
                  <FormDataDisplay />
                </div>
              </FormProvider>
            }
          />

          {/* API Data Route */}
          <Route
            path="/ApiDataDisplay"
            element={
              <UserProvider>
                <ApiDataDisplay />
              </UserProvider>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
