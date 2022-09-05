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
import { FavoriteBorder, Favorite } from "@mui/icons-material/";
const Post = () => {
  const StyledPageContainer = styled(Container)({
    display: "flex",
    flexDirection: "column",
    gap: "3.5rem",
    marginTop: "1.5rem",
    paddingBottom: "4rem",
  });

  return (
    <StyledPageContainer>
      <Card sx={{ borderRadius: "20px" }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe"></Avatar>}
          title="My First Post"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="500"
          image="https://www.zdnet.com/a/img/resize/adcb2eb2cc3f5562f7e80931308e2a08b01947ce/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=900&width=1200"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Description for the post: ...
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
      <Card sx={{ borderRadius: "20px" }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe"></Avatar>}
          title="My First Post"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="500"
          image="https://www.zdnet.com/a/img/resize/adcb2eb2cc3f5562f7e80931308e2a08b01947ce/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=900&width=1200"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            some text here..
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
      <Card sx={{ borderRadius: "20px" }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe"></Avatar>}
          title="My First Post"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="500"
          image="https://www.zdnet.com/a/img/resize/adcb2eb2cc3f5562f7e80931308e2a08b01947ce/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=900&width=1200"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            some text here..
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
    </StyledPageContainer>
  );
};

export default Post;
