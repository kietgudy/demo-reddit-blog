import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import EditPage from "./components/Edit/EditPage";
import store from "./redux/store";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import PostPage from "./components/Posts/PostPage";
import PostItem from "./components/Posts/PostItem";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenPost, setIsOpenPost] = useState(false)
  const pending = useSelector((state) => state.user.pending);
  const error =useSelector((state) => state.user.error)
  return (
    <div className="App">
      {isEdit ? <EditPage setIsEdit={setIsEdit}/> 
      : !isEdit && !isOpenPost ? (
        <>
       <Header setIsEdit={setIsEdit} />
       <div className="post-item-container">
        <PostItem/>
       </div>
       <Footer isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost} />
        </>
      ) : (
        <>
        <Header setIsEdit={setIsEdit} />
        <PostPage setIsOpenPost={setIsOpenPost}/>
        </>
      )}

      {pending && <p className="loading">Loading...</p>}
      {!isEdit && error && (
        <p className="error">Edit user error</p>
      )}
    </div>
  );
}

export default App;
