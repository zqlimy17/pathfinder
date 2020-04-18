import React from "react";
import "./Node.css";

const Node = ({
    isStart,
    isFinish,
    isWall,
    col,
    row,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
}) => {
    const extraClassName = isWall
        ? " node-wall"
        : isFinish
        ? " node-finish"
        : isStart
        ? " node-start"
        : "";

    const identity = `node-${row}-${col}`;

    return (
        <div
            id={identity}
            className={`node${extraClassName}`}
            onMouseDown={() => onMouseDown(row, col)}
            onMouseEnter={() => onMouseEnter(row, col)}
            onMouseUp={() => onMouseUp()}
        ></div>
    );
};

export default Node;
