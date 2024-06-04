import React, { useState } from "react";
import Input from "../Input/Input";
import "./PostPage.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";

const PostPage = (props) => {
  const { setIsOpenPost } = props;
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some description");
  const [isSeledted, setIsSelected] = useState(0);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const handlePost = () => {
    setIsOpenPost(false);
    const newPost = {
      title: title,
      description: desc,
      tag: isSeledted,
    };
    dispatch(createPost(newPost))
  };
  return (
    <section className="post-container">
      <div className="post-navigation">
        <p className="post-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input
        data={title}
        inputType="textarea"
        setData={setTitle}
        label="Title"
        classStyle="post-title"
      />
      <Input
        data={desc}
        inputType="textarea"
        setData={setDesc}
        label="Description"
        classStyle="post-desc"
      />
      <label>Tags</label>
      <div className="post-tags">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className={`${
                isSeledted === index ? "post-tags-selected" : `post-tags-${tag}`
              }`}
              onClick={() => setIsSelected(index)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default PostPage;
