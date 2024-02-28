import React from "react";
import "./ResuableCard.css";
import { Grid } from "../../../node_modules/@mui/material/index";
const ReusableCard = (props) => {
  return (
    <Grid xs={12} lg={12} md={12}
      style={{
        backgroundColor: props.backgroundColor,
        border: props.border,
        padding: props.padding,
        boxShadow: props.boxShadow,
        borderRadius: props.borderRadius,
        // width: props.width,
        // height: props.height,
        // maxWidth: props.maxWidth,
        // maxHeight: props.maxHeight,
        marginTop:props.marginTop
      }}
    >
      {props.content}
    </Grid>
  );
};
ReusableCard.defaultProps = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  padding: "10px",
  // boxShadow: "2px 2px 2px 2px  #F7F7F8",
  borderRadius: "10px",
  // width: "300px",
  // height: "150px",
  // maxWidth:'100%',
  // maxHeight:'600px',
  content: <div>Content</div>,
};
export default ReusableCard;