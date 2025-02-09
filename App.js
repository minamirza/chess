import { createBoard } from "./createBoard";
function App() {
  return (
    <div className="App">
      <div className="board">
        {createBoard().map((item, index) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
}
export default App;
