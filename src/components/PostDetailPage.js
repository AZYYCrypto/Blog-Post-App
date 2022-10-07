import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const PostDetailPage = () => {
  const HeaderPost = styled(Box)({
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
  });
  const ActionIcons = styled(Box)({
    display: "flex",
    gap: "1rem",
    cursor: "pointer",
  });
  const Title = styled(Typography)({
    margin: "10px",
    fontSize: "30px",
  });
  const PostInfo = styled(Box)({
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "17px",
    color: "blue",
  });
  const DescriptionPost = styled(Typography)({
    color: "#666",
    fontSize: "18px",
    lineHeight: "25px",
  });
  return (
    <Container maxWidth="xl" sx={{ marginTop: "2rem" }}>
      <img
        src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2017/11/How-to-post-a-Live-Photo-on-Instagram1.jpg?fit=900%2C600&ssl=1"
        style={{
          width: "100%",
          height: "800px",
          borderRadius: "5px",
          objectFit: "cover",
        }}
      />
      <HeaderPost>
        <Title>Learn React</Title>
        <ActionIcons>
          <EditIcon />
          <DeleteIcon />
        </ActionIcons>
      </HeaderPost>
      <PostInfo>
        <Box>Author:Dimitar Sabev</Box>
        <Box>1 hour ago</Box>
      </PostInfo>
      <DescriptionPost>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimum
        du postsCollectionRef lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minimum du postsCollectionReflorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minimum du postsCollectionReflorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minimum du
        postsCollectionReflorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minimum du postsCollectionReflorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minimum du postsCollectionReflorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minimum du
        postsCollectionRef
      </DescriptionPost>
    </Container>
  );
};

export default PostDetailPage;
