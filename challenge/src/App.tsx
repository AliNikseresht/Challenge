import { Box, Container } from "@mui/material";
import DownloadModal from "./components/DownloadModal";
import RecipeReviewCard from "./components/RecipeReviewCard";

function App() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: { xs: "center", md: "flex-start" },
          my: "2em",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "3em", md: "0" }
        }}
      >
        <DownloadModal />
        <RecipeReviewCard />
      </Box>
    </Container>
  );
}

export default App;
