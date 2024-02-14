"use client";
import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { client } from "@/app/lib/sanity";
async function getData() {
  const query = `*[_type == "skill"]`;

  const data = await client.fetch(query);

  return data;
}
export default async function SkillList() {
  const data = await getData();

  const progress = {
    width: "90%",
    marginRight: "15px",
  };

  return (
    <div>
      {data.map((skill) => (
        <ProgressBar
          key={skill._id}
          animated
          now={skill.percentage}
          style={progress}
          label={
            <span className="progress-label-color">{`${skill.percentage}%`}</span>
          }
        />
      ))}
    </div>
  );
}
