import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import React, { useEffect, useState } from "react";

const Featured = ({ data }) => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Relevant Content</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={
              data
                ? Math.floor(
                    (data.sentiment.related /
                      (data.sentiment.related + data.sentiment.unrelated)) *
                      100
                  )
                : 0
            }
            text={
              data
                ? Math.floor(
                    (data.sentiment.related /
                      (data.sentiment.related + data.sentiment.unrelated)) *
                      100
                  ) + "%"
                : "0%"
            }
            strokeWidth={7}
            styles={buildStyles({
              strokeLinecap: "round",
              pathTransitionDuration: 2.5, // Animation time in seconds
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <p className="title">out of provided contents</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Relevant</div>
            <div className="itemResult">
              <div className="resultAmount">
                {data ? data.sentiment.related : 0}
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Irrelevant</div>
            <div className="itemResult">
              <div className="resultAmount">
                {data ? data.sentiment.unrelated : 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
