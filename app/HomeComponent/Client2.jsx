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
    <>
      <Grid
        container
        padding={2}
        flex
        sx={{
          margin: "auto",
          alignItems: "center", // Center vertically
          minHeight: "100dvh",
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

          <ShowComp />
        </Grid>
      </Grid>
    </>
  );
};

export default ParentComp;
