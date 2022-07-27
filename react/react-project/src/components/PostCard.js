import React, { useState, useEffect } from "react";
import LikeDislikeButton from "./LikeDislikeButton";
import { Avatar, Badge, Card, Container, Group, Text } from "@mantine/core";

// TODO: answer here
export default function PostCard({
  image,
  caption,
  username,
  userId,
  date,
  userImage,
  postId,
  liked,
  likeCount,
  disliked,
  dislikeCount,
}) {
  // TODO: answer here
  // const dateConvert = new Date(date);
  return (
    <>
      <Container
        size="xs"
        px="xs"
        style={{
          paddingTop: "2rem",
          shadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
        }}
      >
        <div
          aria-label="Post Card"
          style={{
            margin: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0px 0px 5px #ccc",
            backgroundColor: "#fff",
          }}
        >
          {/* <div className="post-card-image">
        </div> */}
          <Card withBorder p="lg" radius="md">
            <Card.Section mb="sm">
              <img
                aria-label="Post Image"
                src={image}
                alt="Post"
                width="100%"
              />
            </Card.Section>
          </Card>
          <Badge>
            <Text fontSize="sm">{date}</Text>
          </Badge>
          <div aria-label="Post Caption">
            <Text weight={500} mt="xs">
              {caption}
            </Text>
          </div>
          <Group mt="lg">
            <Avatar src={userImage} radius="sm" />
            <div aria-label="Post User Name">
              <Text weight={500}>{username}</Text>
              <Text>{date}</Text>
            </div>
          </Group>
          {/* <div aria-label="Post User Id">{userId}</div> */}
          <div aria-label="Post Date">{date}</div>
          <LikeDislikeButton
            id={postId}
            isLiked={liked}
            isDisliked={disliked}
            likeCount={likeCount}
            dislikeCount={dislikeCount}
          />
        </div>
      </Container>
    </>
  );
}
