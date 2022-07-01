import { Box, IconButton, ThemeProvider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/actions/theme";
import NightlightIcon from "@mui/icons-material/Nightlight";

interface LayoutProps {
  children: React.ReactElement;
}
export default function Layout({ children }: LayoutProps) {
  const { theme } = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  const handleChangeTheme = () => {
    dispatch(changeTheme(theme.palette.mode === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.neutral[0],
          display: "flex",
          flexDirection: "column",
        }}
      >
        <IconButton
          onClick={handleChangeTheme}
          size="large"
          sx={{
            position: "absolute",
            top: { xs: 16, md: 32 },
            left: { xs: 24, md: 64 },
          }}
        >
          <NightlightIcon />
        </IconButton>
        {children}
      </Box>
    </ThemeProvider>
  );
}
