import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import EditPage from "./components/Edit/EditPage";
import store from "./redux/store";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="App">
      {isEdit ? <EditPage setIsEdit={setIsEdit}/> : <Header setIsEdit={setIsEdit} />}
    </div>
  );
}

export default App;
