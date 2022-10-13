import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useParams } from "react-router-dom";
import { db } from "../configs/firebase";

import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import DeleteDocIcon from "./DeleteDocIcon";
import Loading from "./Loading";
import { UserAuth } from "../contexts/AuthContext";
const PostDetailPage = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { postId } = useParams();
  const { setPostList } = UserAuth();
  const getPost = async () => {
    const docRef = doc(db, "posts", postId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setPost(docSnap.data());
      setLoading(false);
    }
  };
  useEffect(() => {
    getPost();
  }, [postId]);

  const HeaderPost = styled(Box)({
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
  });
  const ActionIcons = styled(Box)({
    display: "flex",
    gap: "1rem",
    cursor: "pointer",
    justifyContent: "flex-end",
    marginTop: "1rem",
  });
  const Title = styled(Typography)({
    margin: "10px",
    fontSize: "30px",
  });
  const PostInfo = styled(Box)({
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    fontSize: "17px",
  });
  const DescriptionPost = styled(Typography)({
    color: "#666",
    fontSize: "18px",
    lineHeight: "25px",
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      <img
        src={post.imageUrl}
        style={{
          width: "100%",
          height: "800px",
          borderRadius: "5px",
          objectFit: "cover",
        }}
      />
      <ActionIcons>
        <EditIcon />

        <DeleteDocIcon
          imageUrl={post.imageUrl}
          id={postId}
          setPostList={setPostList}
        />
      </ActionIcons>
      <HeaderPost>
        <Title>{post.title}</Title>
      </HeaderPost>
      <PostInfo>
        <Typography>{`${post.author.name} · ${post.createdAt} · 5 min read`}</Typography>
      </PostInfo>
      <DescriptionPost>{post.description}</DescriptionPost>
    </Container>
  );
};

export default PostDetailPage;
