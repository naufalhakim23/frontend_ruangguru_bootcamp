// TODO: answer here
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfileDetail } from "../api/profile";
import PostCard from "./PostCard";
export default function Profile() {
  // TODO: answer here
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState(null);
  const fetchPost = async () => {
    try {
      getProfileDetail(id).then((res) => {
        if (!!res) {
          setProfile(res.data.data);
          setPosts(res.data.data.posts);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <div className="text-center">
        <h1>Post By</h1>
        <img src={profile.image} className="rounded-circle my-2" width="80px" />
        <p aria-label="User Profile Name" className="fs-5 p-2">
          {profile.name}
        </p>
      </div>
      <div className="row">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            image={post.image}
            caption={post.content}
            userId={profile.id}
            username={profile.name}
            userimage={profile.image}
            date={post.createdAt}
            id={post.id}
          />
        ))}
      </div>
    </>
  );
}
