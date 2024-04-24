import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import levelIcon from "../../public/Frame 170.svg";
import CustomButton from "./CustomButton";
import { Box } from "@mui/material";

// Props for the ExpandMore component
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

/**
 * ExpandMore component is an IconButton used to expand or collapse content.
 * @param {ExpandMoreProps} props - Props for the ExpandMore component.
 * @returns {JSX.Element} - The ExpandMore IconButton component.
 */
const ExpandMore = (props: ExpandMoreProps): JSX.Element => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
};

/**
 * RecipeReviewCard component displays a card with expandable content.
 * @returns {JSX.Element} - The RecipeReviewCard component.
 */
export default function RecipeReviewCard(): JSX.Element {
  const [expanded, setExpanded] = React.useState(false);

  // Handles expanding or collapsing content
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: "23rem",
        bgcolor: "#231F2F",
        boxShadow: "0px 1px 2px 0px #0000004D",
        borderRadius: "20px",
        px: "0.5em",
        py: "0em",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: expanded ? "flex-end" : "space-between"
      }}
    >
      <CardHeader
        sx={{ width: "100%" }}
        action={
          <IconButton aria-label="voice & bookmark">
            <VolumeUpIcon sx={{ color: "#EAEAEA", mr: "0.5em", fontSize: "2rem" }} />
            <BookmarkBorderIcon sx={{ color: "#EAEAEA", fontSize: "2rem" }} />
          </IconButton>
        }
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ color: "#EAEAEA", fontSize: "1.3rem", fontWeight: "600" }}>miglioramento</Typography>
            <Typography component="span" sx={{ color: "#CBCBCB", mx: "0.3em", fontSize: "0.9rem", mt: "0.2em" }}>
              /
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#CBCBCB", fontSize: "0.8rem", mt: "0.2em" }}>
              Noun
            </Typography>
          </div>
        }
      />
      <CardContent>
        <Typography variant="body2" color="#CBCBCB" sx={{ display: expanded ? "none" : "block" }}>
          Betterment . Gain . rising . improvement. rising . improvement.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: expanded ? "none" : "block" }} disableSpacing>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <CustomButton
            variant="primary"
            padding="10px 22px 10px 22px"
            boxShadow="none"
            backgroundColor="none"
            border="1px solid #6157C8"
            color="#6157C8"
            backgroundImage="none"
          >
            Show more
          </CustomButton>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            sx={{ bgcolor: "#FFFFFF12", p: "0.7em 1.1em", borderRadius: "20px", color: "#CBCBCB", fontSize: "0.9rem" }}
            paragraph
          >
            <Typography paragraph sx={{ fontWeight: "700", fontSize: "1.2rem" }}>
              Meaning
            </Typography>
            Betterment . Gain . rising . improvement. rising . improvement. Betterment . Gain . rising . improvement. rising .
            improvement. Betterment . Gain . rising . improvement. rising . improvement. Betterment . Gain . rising .
            improvement. rising . improvement. Betterment . Gain . rising . improvement. rising . improvement. Betterment . Gain
            . rising . improvement. rising . improvement. Betterment . Gain . rising . improvement. rising . improvement.
            Betterment . Gain . rising . improvement. rising
          </Typography>
          <Typography
            sx={{ bgcolor: "#FFFFFF12", p: "0.7em 1.1em", borderRadius: "20px", color: "#CBCBCB", fontSize: "0.9rem" }}
            paragraph
          >
            <Typography paragraph sx={{ fontWeight: "700", fontSize: "1.2rem" }}>
              Synonym
            </Typography>
            Betterment . Gain . rising . improvement. rising . improvement. Betterment . Gain . rising . improvement. rising .
            improvement. Betterment . Gain . rising . improvement. rising . improvement. Betterment
          </Typography>
          <Typography
            sx={{ bgcolor: "#FFFFFF12", p: "0.7em 1.1em", borderRadius: "20px", color: "#CBCBCB", fontSize: "0.9rem" }}
            paragraph
          >
            <Typography paragraph sx={{ fontWeight: "700", fontSize: "1.2rem" }}>
              Opposite
            </Typography>
            Betterment . Gain . rising . improvement. rising . improvement. Betterment . Gain . rising .
          </Typography>
        </CardContent>
      </Collapse>
      <Box
        sx={{
          display: "flex",
          width: "30%",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: expanded ? "100px" : "auto",
          cursor: "pointer"
        }}
        onClick={() => setExpanded(false)}
      >
        <Avatar src={levelIcon} alt="mid level icon" sx={{ borderRadius: "0", width: "14%", height: "14%" }} />
        <Typography color="#CBCBCB" fontSize="1.1rem">
          Mid level
        </Typography>
      </Box>
    </Card>
  );
}
