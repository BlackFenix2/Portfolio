import { Box, Typography, Link, Paper } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Page() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Resume
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: "100%" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Resume
          </Typography>
          <Typography variant="body1">
            Under construction. Please check my linkedin profile for my latest
            resume:
            <Link
              href="https://www.linkedin.com/in/ernie-francis"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              underline="hover"
              sx={{ display: "inline-flex", alignItems: "center" }}
            >
              LinkedIn profile&nbsp;
              <LinkedInIcon fontSize="small" />
            </Link>
            .
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
