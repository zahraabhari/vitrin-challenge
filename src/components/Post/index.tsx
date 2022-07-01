import { Container, Grid, Typography, Box, useTheme } from "@mui/material";
import Image from "next/image";
import { PostType } from "../../api/posts";
import { UserType } from "../../api/user";

export interface PostProps extends PostType {
  user?: UserType;
}
export default function Post({ title, body, user }: PostProps) {
  const { palette } = useTheme();
  return (
    <Container sx={{ px: 0 + "!important" }}>
      <Grid
        container
        columnSpacing={4}
        sx={{
          display: "flex",
          py: { xs: 6, md: 4 },
          px: 4,
          minHeight: ({ spacing }) => `calc(100vh - ${spacing(12)})`,
          boxShadow: "0 0 20px " + palette.neutral[400],
          backgroundColor: palette.neutral[50],
          borderRadius: "8px",
          my: { md: 6 },
          img: { mt: { xs: 3, md: 0 } },
        }}
      >
        <Grid
          item
          md={7}
          xs={12}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography
            component="h3"
            variant="h3"
            sx={{ color: palette.neutral[900] }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: palette.neutral[600], my: 3 }}
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
              <Typography
                component="span"
                variant="body1"
                sx={{ color: palette.neutral[900] }}
              >
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
          xs={12}
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
  );
}
