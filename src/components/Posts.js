import styled from "@emotion/styled";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Box,
  Typography,
  Avatar,
  CardHeader,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import { FavoriteBorder, Favorite } from "@mui/icons-material/";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../configs/firebase";
import DeleteDocIcon from "./DeleteDocIcon.js";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const Post = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [postList, setPostList] = useState([]);
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
        postList.map(
          ({ id, title, author, description, createdAt, imageUrl }) => {
            return (
              // <Card sx={{ borderRadius: "20px" }} key={id}>
              //   <CardHeader
              //     avatar={<Avatar aria-label="recipe"></Avatar>}
              //     action={
              //       <>
              //         {/* <IconButton aria-label="settings">
              //         <EditIcon />
              //       </IconButton> */}

              //         <DeleteDocIcon
              //           setPostList={setPostList}
              //           id={id}
              //           imageUrl={imageUrl}
              //         />
              //       </>
              //     }
              //     title={title}
              //     subheader={`${author.name} · ${createdAt}`}
              //   />
              //   <CardMedia
              //     component="img"
              //     height="530"
              //     image={imageUrl}
              //     alt="Paella dish"
              //   />
              //   <CardContent>
              //     <Typography variant="body2" color="text.secondary">
              //       {description}
              //     </Typography>
              //   </CardContent>
              //   <CardActions disableSpacing>
              //     <IconButton aria-label="add to favorites">
              //       <Checkbox
              //         icon={<FavoriteBorder />}
              //         checkedIcon={<Favorite sx={{ color: "red" }} />}
              //       />
              //     </IconButton>
              //     <IconButton aria-label="share">
              //       <ShareIcon />
              //     </IconButton>
              //   </CardActions>
              // </Card>
              <Card
                sx={{ borderRadius: "20px", textDecoration: "none" }}
                component={Link}
                to={`/post/${id}`}
              >
                <CardHeader
                  avatar={<Avatar aria-label="recipe"></Avatar>}
                  action={
                    <>
                      {/* <IconButton aria-label="settings">
                      <EditIcon />
                    </IconButton> */}

                      <DeleteDocIcon
                        setPostList={setPostList}
                        id={id}
                        imageUrl={imageUrl}
                      />
                    </>
                  }
                />
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
                    height="300"
                    image={imageUrl}
                    alt="alt text"
                  />
                </CardActionArea>
              </Card>
            );
          }
        )
      )}
    </StyledPageContainer>
  );
};

export default Post;
