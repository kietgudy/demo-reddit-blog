import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import EditPage from "./components/Edit/EditPage";
import store from "./redux/store";
import { useSelector } from "react-redux";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error =useSelector((state) => state.user.error)
  return (
    <div className="App">
      {isEdit ? <EditPage setIsEdit={setIsEdit}/> : <Header setIsEdit={setIsEdit} />}
      {pending && <p className="loading">Loading...</p>}
      {!isEdit && error && (
        <p className="error">Edit user error</p>
      )}
    </div>
  );
}

export default App;
