import React from "react";
import { Vortex } from "react-loader-spinner";

const Spin = () => {
  return (
    <div>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={[
          "rgba(6, 6, 251, 0.859)",
          "rgba(247, 25, 203, 0.873)",
          "rgba(6, 6, 251, 0.859)",
          "rgba(247, 25, 203, 0.873)",
          "rgba(6, 6, 251, 0.859)",
          "rgba(247, 25, 203, 0.873)",
        ]}
      />
      <h2>Loading...</h2>
    </div>
  );
};

export default Spin;
