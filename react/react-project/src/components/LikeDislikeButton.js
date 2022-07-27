// TODO: answer here
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../api/config";
export default function LikeDislikeButton({
  id,
  isLiked, //true or false
  isDisliked, //true or false
  likeCount,
  dislikeCount,
}) {
  // TODO: answer here
  const [likeCounter, setLikeCounter] = useState(likeCount);
  const [dislikeCounter, setDislikeCounter] = useState(dislikeCount);

  const handleLike = () => {
    if (isLiked === false) {
      setDislikeCounter(dislikeCounter - 1);
      setLikeCounter(likeCounter + 1);
      axios.get(`${API_URL}/post/${id}/like`, {
        withCredentials: true,
      });
    } else if (isLiked === true) {
      setDislikeCounter(dislikeCounter);
      setLikeCounter(likeCounter - 1);
      axios.get(`${API_URL}/post/${id}/unlike`, {
        withCredentials: true,
      });
    }
  };

  const handleDislike = () => {
    if (isDisliked === false) {
      setDislikeCounter(dislikeCounter + 1);
      setLikeCounter(likeCounter - 1);
      axios.get(`${API_URL}/post/${id}/dislike`, {
        withCredentials: true,
      });
    } else if (isDisliked === true) {
      setDislikeCounter(dislikeCounter - 1);
      setLikeCounter(likeCounter);
      axios.get(`${API_URL}/post/${id}/undislike`, {
        withCredentials: true,
      });
    }
  };
  return (
    <>
      <button aria-label="Like Button" onClick={handleLike}>
        Like
      </button>
      <button aria-label="Dislike Button" onClick={handleDislike}>
        Dislike
      </button>
      <p aria-label="Like Count">{likeCounter}</p>
      <p aria-label="Dislike Count">{dislikeCounter}</p>
    </>
  );
}
