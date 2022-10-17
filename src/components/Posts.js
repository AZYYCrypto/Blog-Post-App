import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Avatar,
  CardHeader,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../configs/firebase";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
const Post = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { postList, setPostList } = UserAuth();

  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setIsLoading(false);
  };
  useEffect(() => {
    getPosts();
  }, []);

  const StyledPageContainer = styled(Container)({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "3.5rem",
    marginTop: "1.5rem",
    paddingBottom: "4rem",
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StyledPageContainer maxWidth="xl">
      {postList.length === 0 ? (
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "2rem",
          }}
        >
          No Posts Yet
        </Typography>
      ) : (
        postList.map(({ id, title, createdAt, imageUrl, author }) => {
          return (
            <Card
              sx={{ borderRadius: "20px", textDecoration: "none" }}
              component={Link}
              to={`/post/${id}`}
            >
              <CardHeader avatar={<Avatar src={author.photoAvatar} />} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography gutterBottom component="div">
                  {createdAt}
                </Typography>
              </CardContent>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300rem"
                  image={imageUrl}
                  alt="alt text"
                />
              </CardActionArea>
            </Card>
          );
        })
      )}
    </StyledPageContainer>
  );
};

export default Post;
