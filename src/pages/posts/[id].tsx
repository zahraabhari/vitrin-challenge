import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { fetchPost, Post } from "../../api/posts";
import { fetchUser, User } from "../../api/user";
import Page from "../../components/Page";
import NotFoundPage from "../404";

interface PostProps extends Post {
  user?: User;
  notFound?: boolean;
}
function PostPage({
  id,
  userId,
  title,
  body,
  user,
  notFound = false,
}: PostProps) {
  const { palette } = useTheme();
  if (notFound) return <NotFoundPage />;
  return (
    <Page title={title} description={body?.substring(250)}>
      <Container sx={{ px: 0 + "!important" }}>
        <Grid
          container
          columnSpacing={4}
          sx={{
            display: "flex",
            p: 4,
            height: ({ spacing }) => `calc(100vh - ${spacing(12)})`,
            boxShadow: "0 0 20px " + palette.neutral[400],
            my: 6,
          }}
        >
          <Grid item md={7} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography component="h3" variant="h3">
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: palette.neutral[600], mt: 3 }}
            >
              {body}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "auto",
                img: { borderRadius: "100%" },
              }}
            >
              <Image
                src="/images/user.png"
                width="56px"
                height="56px"
                alt={user?.name}
              />
              <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                <Typography component="span" variant="body1">
                  {user?.name}
                </Typography>
                <Typography
                  component="span"
                  variant="body1"
                  sx={{ color: palette.neutral[500] }}
                >
                  {user?.company.name}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={5}
            sx={{
              height: "100%",
              overflow: "hidden",
              img: { width: "auto", height: "100%" },
            }}
          >
            <img
              src="/images/post-image.png"
              width="720px"
              height="800px"
              alt="post image"
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx);
  try {
    const { id } = ctx.query;
    if (!id || Array.isArray(id)) throw "Not valid id";
    const post = await fetchPost(id);
    const user = post?.data?.userId
      ? await fetchUser(String(post.data.userId))
      : { data: {} };

    return { props: { ...post.data, user: user.data } };
  } catch (e) {
    return { props: { notFound: true } };
  }
};

export default PostPage;
