import { Box, Typography } from "@mui/material";

export default function NotFoundPage(){
    return <Box sx={{
        width:'100vw',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h3">Not Found</Typography>
    </Box>

}