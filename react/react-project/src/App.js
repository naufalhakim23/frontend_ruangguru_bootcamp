import "./App.css";
// TODO: answer here
import React from "react";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import UploadForm from "./components/UploadForm";
import { useState, useEffect } from "react";
import { getPostList, pushPost } from "./api/post";
import { Grid } from "@mantine/core";

function App() {
  // TODO: answer here
  const [post, setPost] = useState([]);
  useEffect(() => {
    getPostList().then((data) => {
      setPost(data);
    });
  }, []);
  return (
    <div aria-label="App">
      <Navbar />
      <Grid>
        {post?.map((data) => {
          return (
            <div className="col-md-6" key={data.id}>
              <PostCard
                image={data.image}
                caption={data.content}
                username={data.author.name}
                userId={data.author.id}
                date={data.createdAt}
                userImage={data.author.image}
                postId={data.id}
                liked={data.liked}
                likeCount={data.likeCount}
                disliked={data.disliked}
                dislikeCount={data.dislikeCount}
              />
            </div>
          );
        })}
      </Grid>
      <PostCard />
      <UploadForm />
    </div>
  );
}

export default App;
