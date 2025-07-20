import "./App.css";
import ClassBasedComponent from "./components/ClassBasedComponent";
import FunctionBasedComponent from "./components/FunctionBasedComponent";
const App = () => {
  return (
    <div id="app">
      <h1>Assignment - 2 Counter Application</h1>
      <FunctionBasedComponent />
      <ClassBasedComponent />
    </div>
  );
};

export default App;
