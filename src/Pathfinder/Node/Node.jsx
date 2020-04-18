import React from "react";
import "./Node.css";

const Node = ({ isStart, isFinish, isVisited }) => {
    const extraClassName = isFinish
        ? "node-finish"
        : isStart
        ? "node-start"
        : isVisited
        ? "node-visited"
        : "";
    return <div className={`node ${extraClassName}`}></div>;
};

export default Node;
