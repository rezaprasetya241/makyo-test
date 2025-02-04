import "./App.css";
import Dropdown from "./components/dropdown/dropdown";

function App() {
  return (
    <>
      <Dropdown
        label={"label"}
        placeholder={""}
        isMultiple={false}
        withSearch={false}
        options={[]}
        outlined={false}
      />
    </>
  );
}

export default App;
