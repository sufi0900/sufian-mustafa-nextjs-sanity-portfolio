import React from "react";
import FirstComp from "./HomeCode";
// import SecComp from "./HomeCOdeText";

import Grid from "@mui/material/Grid";
// import UserLikes3 from "../blogs2/page";
import ShowComp from "./ShowComp";
// import SvgHomePage from "./SvgHomePage";
// import ShowComp2 from "./ShowComp2";
// import Header from "../../components/UserAvatar";
// import Header2 from "../../components/SideNav";

const ParentComp = () => {
  return (
    <div style={{ minHeight: "100dvh" }}>
      <Grid
        container
        padding={2}
        flex
        className="flex"
        sx={{
          margin: "auto",
          // alignItems: "center", // Center vertically

          // Set minimum height of the container to the viewport height
        }}
      >
        <Grid
          item
          lg={12}
          sm={12}
          sx={{ marginTop: "75px" }}
          container
          className="flex"
        >
          <div className="Home">
            <FirstComp />
          </div>
        </Grid>
      </Grid>
      <div>
        <ShowComp />
      </div>
    </div>
  );
};

export default ParentComp;
