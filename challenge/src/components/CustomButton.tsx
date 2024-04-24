import { Button } from "@mui/material";
import React from "react";

/**
 * Props for the CustomButton component.
 */
interface CustomButtonProps {
  variant: "primary" | "secondary" | "danger";
  backgroundColor: string;
  color: string;
  border: string;
  boxShadow: string;
  padding: string;
  backgroundImage: string;
  children: React.ReactNode;
}

/**
 * CustomButton component renders a customized button.
 * @param {CustomButtonProps} props - Props for the CustomButton component.
 * @returns {JSX.Element} - The CustomButton component.
 */
const CustomButton: React.FC<CustomButtonProps> = ({
  border,
  backgroundColor,
  color,
  backgroundImage,
  children,
  boxShadow,
  padding
}) => {
  const buttonStyle: React.CSSProperties = {
    borderRadius: "20px",
    height: "40px",
    fontSize: "1rem",
    cursor: "pointer",
    outline: "none",
    textAlign: "center",
    textTransform: "capitalize",
    padding: padding,
    border: border,
    color: color,
    backgroundColor: backgroundColor,
    backgroundImage: backgroundImage,
    boxShadow: boxShadow
  };

  return <Button style={buttonStyle}>{children}</Button>;
};

export default CustomButton;
