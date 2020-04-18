export function dijkstra(grid, startNode, finishNode) {
    const visitedNodeInOrder = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);
    while (!!unvisitedNodes.length) {
        sortNodesByDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();
        closestNode.isVisited = true;
        visitedNodeInOrder.push(closestNode);

        if (closestNode === finishNode) return visitedNodeInOrder;
        updateNeighbours(closestNode, grid);
    }
}

const sortNodesByDistance = (unvisitedNodes) => {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
};

const updateNeighbours = (node, grid) => {
    const neighbours = getNeighbours(node, grid);
    for (const neighbour of neighbours) {
        neighbour.distance = node.distance + 1;
    }
};

const getNeighbours = (node, grid) => {
    const neighbours = [];
    const { col, row } = node;
    if (row > 0) neighbours.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbours.push(grid[row + 1][col]);
    if (col > 0) neighbours.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbours.push(grid[row][col + 1]);
    return neighbours;
};

const getAllNodes = (grid) => {
    const nodes = [];
    for (const row of grid) {
        for (const node of row) {
            nodes.push(node);
        }
    }
    return nodes;
};
