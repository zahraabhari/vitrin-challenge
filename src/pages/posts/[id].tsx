import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { fetchPost, PostType } from "../../api/posts";
import { fetchUser, UserType } from "../../api/user";
import Page from "../../components/Page";
import Post, { PostProps } from "../../components/Post";
import NotFoundPage from "../404";

interface PostPageProps extends PostProps {
  notFound?: boolean;
}
function PostPage({ notFound = false, ...postProps }: PostPageProps) {
  if (notFound) return <NotFoundPage />;
  return (
    <Page title={postProps.title} description={postProps.body}>
      <Post {...postProps} />
    </Page>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
