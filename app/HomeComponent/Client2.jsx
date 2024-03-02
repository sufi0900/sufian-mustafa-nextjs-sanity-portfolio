import React from "react";
import FirstComp from "./HomeCode";

import Grid from "@mui/material/Grid";

import ShowComp from "./ShowComp";

const ParentComp = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Grid
        container
        padding={2}
        flex
        className="flex"
        sx={{
          margin: "auto",
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
          <div className="Home glassEffect">
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
