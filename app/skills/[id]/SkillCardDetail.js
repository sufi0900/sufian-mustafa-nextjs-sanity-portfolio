import React from "react";
import "./skill.css";
const SkillCardDetail = () => {
  return (
    <div>
      <div className="row d-flex justify-content-center mt-100">
        <div className="col-md-6">
          <div className="progress blue">
            <span className="progress-left">
              <span className="progress-bar" />
            </span>
            <span className="progress-right">
              <span className="progress-bar" />
            </span>
            <div className="progress-value">90%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCardDetail;
