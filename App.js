import Form from "./Components/Form";
import { useState, useEffect } from "react";
import PostsList from "./Components/PostsList";

function App() {
  const [postList, setPostList] = useState([]);
  const [intervalIdInState, setIntervalIdInState] = useState(null);
  const addPost = (post) => {
    const newPostList = setPostList([...postList, post]);
    localStorage.setItem("storagePostList", JSON.stringify(newPostList));
  };
  useEffect(() => {
    const data = localStorage.getItem("storagePostList");
    if (data) {
      setPostList(JSON.parse(data));
    }
    if (intervalIdInState !== null) {
      clearInterval(intervalIdInState);
    }
    const intervalId = setInterval(
      () => {
        const updatedPosts = localStorage.getItem("storagePostList");
        if (updatedPosts) {
          setPostList(JSON.parse(updatedPosts));
        }
      },

      10000
    );
    setIntervalIdInState(intervalId);
    return () => {
      clearInterval(intervalIdInState);
    };
  }, []);

  return (
    <div className="App">
      <Form addPost={addPost} />
      <PostsList postList={postList} />
    </div>
  );
}

export default App;
