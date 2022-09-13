import styled from "@emotion/styled";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import { FavoriteBorder, Favorite } from "@mui/icons-material/";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../configs/firebase";
import DeleteDocIcon from "./DeleteDocIcon.js";
const Post = () => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [postList]);

  const StyledPageContainer = styled(Container)({
    display: "flex",
    flexDirection: "column",
    gap: "3.5rem",
    marginTop: "1.5rem",
    paddingBottom: "4rem",
  });

  return (
    <StyledPageContainer>
      {postList.map(
        ({ id, title, author, description, createdAt, imageUrl }) => {
          return (
            <Card sx={{ borderRadius: "20px" }} key={id}>
              <CardHeader
                avatar={<Avatar aria-label="recipe"></Avatar>}
                action={
                  <>
                    {/* <IconButton aria-label="settings">
                      <EditIcon />
                    </IconButton> */}

                    <DeleteDocIcon id={id} imageUrl={imageUrl} />
                  </>
                }
                title={title}
                subheader={`${author.name} · ${createdAt}`}
              />
              <CardMedia
                component="img"
                height="530"
                image={imageUrl}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{ color: "red" }} />}
                  />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          );
        }
      )}
    </StyledPageContainer>
  );
};

export default Post;
