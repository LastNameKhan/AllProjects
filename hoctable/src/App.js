import "./App.css";
import Table from "./Components/Table";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import Tabletwo from "./Components/Tabletwo";

function App() {
  return (
    <div className="App">
      <Table />
      <Tabletwo />
    </div>
  );
}

// const NewComponent = higherOrderComponent(originalComponent)
// const EnhancedComponent = higherOrderComponent(originalComponent)
// const ironMan = withSuit(TonyStark)

export default App;
