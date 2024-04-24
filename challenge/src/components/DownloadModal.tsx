import React from "react";
import { IconButton, List, ListItem, ListItemText, Typography, ButtonGroup } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import DoneIcon from "@mui/icons-material/Done";
import CustomButton from "./CustomButton";

/**
 * DownloadModal component renders a list of subtitle formats with download options.
 * @returns {JSX.Element} - The DownloadModal component.
 */
const DownloadModal: React.FC = (): JSX.Element => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        backgroundImage: "linear-gradient(124.18deg, #391A48 0%, #1C1A26 66.6%)",
        borderRadius: "20px",
        py: "1.5em"
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "#DFE1F9",
          fontSize: "1.25rem",
          fontWeight: "800",
          borderBottom: "1px solid #2C2538",
          pb: "1em"
        }}
      >
        Select the subtitle format
      </Typography>
      {["CSV", "Excel", "JSON", "HTML", "Anki", "Text"].map(value => (
        <ListItem
          sx={{ px: "2.4em", borderBottom: "1px solid #2C2538" }}
          key={value}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment" sx={{ mr: "1em" }}>
              <ListItemText
                sx={{ color: value === "Text" ? "#48C1E8" : "#ED2481" }}
                primary={value === "Text" ? "(Free)" : "Premium"}
              />
              {value === "Text" ? (
                <span style={{ color: "#48C1E8", marginTop: "0.25em" }}>
                  <DoneIcon />
                </span>
              ) : (
                <span style={{ marginLeft: "0.2em", color: "#ED2481" }}>
                  <StarRateIcon />
                </span>
              )}
            </IconButton>
          }
        >
          <ListItemText sx={{ color: "#FFFFFF" }} primary={value} />
        </ListItem>
      ))}
      <ButtonGroup
        variant="text"
        aria-label="Subtitle"
        sx={{ display: "flex", justifyContent: "space-around", mt: "1.3em", px: "2.1em" }}
      >
        <CustomButton
          variant="primary"
          padding="11px 22px 11px 22px"
          boxShadow="0px 1px 1px 3px #00000040"
          backgroundColor="#1B1B21"
          border="1px solid #380C9D"
          color="#EAEAEA"
          backgroundImage="none"
        >
          Cancel
        </CustomButton>
        <CustomButton
          variant="primary"
          padding="11px 50px 9px 50px"
          boxShadow="0px 1px 4px 1px #9413CE"
          backgroundColor="none"
          border="none"
          color="#EAEAEA"
          backgroundImage="linear-gradient(274.17deg, #C41BD3 5.71%, #790FCB 73.06%)"
        >
          Download
        </CustomButton>
      </ButtonGroup>
    </List>
  );
};

export default DownloadModal;
