import React, { useState, useEffect } from "react";
import "./Pathfinder.css";
import Node from "./Node/Node";
import { dijkstra } from "../Algorithms/Dijkstra";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

const Pathfinder = () => {
    const [grid, setGrid] = useState([]);
    useEffect(() => {
        initaliseGrid();
    }, []);

    const initaliseGrid = () => {
        setGrid([]);
        for (let row = 0; row < 20; row++) {
            const currentRow = [];
            for (let col = 0; col < 50; col++) {
                currentRow.push(createNode(row, col));
            }
            setGrid((grid) => [...grid, currentRow]);
        }
    };

    const createNode = (row, col) => {
        return {
            row,
            col,
            isStart: row === START_NODE_ROW && col === START_NODE_COL,
            isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
            distance: Infinity,
            isVisited: false,
            ifWall: false,
            previousNode: null,
        };
    };

    const animateDijkstra = (visitedNodesInOrder) => {
        for (let i = 0; i < visitedNodesInOrder.length; i++) {
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                // console.log(node);
                const newGrid = grid.slice();
                const newNode = {
                    ...node,
                    isVisited: true,
                };
                newGrid[node.row][node.col] = newNode;
                setGrid(newGrid);
            }, 50 * i);
        }
    };

    const visualiseDijkstra = () => {
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
        console.log(visitedNodesInOrder);
        animateDijkstra(visitedNodesInOrder);
    };

    return (
        <>
            <div>
                <button onClick={() => visualiseDijkstra()}>
                    Dijkstra's Algorithm
                </button>
                <button onClick={() => initaliseGrid()}>Clear</button>
            </div>
            <div className='grid'>
                {grid.map((row, rowIndex) => {
                    return (
                        <div className='nodeRow' key={rowIndex}>
                            {row.map((node, nodeIndex) => {
                                const { isStart, isFinish, isVisited } = node;
                                return (
                                    <Node
                                        key={nodeIndex}
                                        isStart={isStart}
                                        isFinish={isFinish}
                                        isVisited={isVisited}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Pathfinder;
