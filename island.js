
function getNeighbors(row, col, graph) {

  let neighbors = new Array();

  console.log(graph[row][col]);
  
  // Check top
  if (row > 0 && graph[row - 1][col]) {
    neighbors.push([row - 1, col]);
  }
  // Check bottom
  if (row < graph.length - 1 && graph[row + 1][col]) {
    neighbors.push([row + 1, col]);
  } 
  // Check left
  if (col > 0 && graph[row][col - 1]) {
    neighbors.push([row, col - 1]);
  }
  // Check right
  if (col < graph[0].length - 1 && graph[row][col + 1]) {
    neighbors.push([row, col + 1]);
  }
  
  // Return neighbors
  return neighbors
}




// function islandSize(row, col, graph) {

//   // Your code here
//   // Create a visited set to store visited nodes
//   const visited = new Set();
//   // Create a stack, put the starting node in the stack
//   const stack = [[row, col]];

//   // Put the stringified starting node in visited
//   visited.add([row, col].toString());

//   // Initialize size to 0
//   let size = 0;

//   // While the stack is not empty,

//   while (stack.length > 0) {
//     // Pop the first node
//     const currNode = stack.pop();
//     let currRow = currNode[0];
//     let currCol = currNode[1];

//     // DO THE THING (increment size by 1)
//     size++;
//     const neighbors = getNeighbors(currRow, currCol, graph);

//     // Then push all the UNVISITED neighbors on top of the stack
//     // and mark them as visited
//     // HINT: This is what your helper function `getNeighbors` is for
//     // HINT: Remember, you're storing your visited nodes as strings!
//     neighbors.forEach(node => {

//   // return size
//       if (!visited.has(node.toString())) {
//         visited.add(node.toString());

//   // Your code here
//         stack.push(node);
//       }
//     });
//   }
//   // return size
//   return size;
// }




matrix = [
  [1,1,1,0,0],
  [0,1,1,0,1],
  [0,1,1,0,1],
]

function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  let visited = new Set();
  // Create a stack, put the starting node in the stack

  let stack = [];
  let node = [row, col]
  stack.push(node)
  // Put the stringified starting node in visited

  visited.add(node.toString())
  // Initialize size to 0

  let size = 0;
  // While the stack is not empty,
  while(stack.length){
    let currentNode = stack.pop()
    let currentValue = graph[currentNode[0]][currentNode[1]]
    console.log('currentValue', currentValue);
    let neighbors;
    if(currentValue === 1){
      neighbors = getNeighbors(currentNode[0], currentNode[1], graph)
      size++
      console.log('currentNode', currentNode);
      console.log("My neighbors is " , neighbors)
    }

        for(let neighbor of neighbors){
            if (!visited.has(neighbor.toString())){

                stack.push(neighbor)
                visited.add(neighbor.toString())
            }
        }
  }
  return size
}


function islandSize(row, col, graph) {
  // Initialize size to 0
  let size = 0

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited
    // Create a visited set to store visited nodes
    , visited = new Set([[row, col].toString()])

  // Initialize size to 0
    // Create a stack, put the starting node in the stack
    , stack = [[row, col]];

  // While the stack is not empty,
  while (stack.length) {

    // Pop the first node
    let currNode = stack.pop();

    // DO THE THING (increment size by 1)
    if (graph[currNode[0]][currNode[1]] === graph[row][col]) size++;


    let neighbors = getNeighbors(currNode[0], currNode[1], graph);
    console.log('currNode', currNode);
    console.log('neighbors', neighbors);

    neighbors.forEach(indexPair => {
      if (!visited.has(indexPair.toString())) {

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
        // Then push all the UNVISITED neighbors on top of the stack
        stack.push(indexPair);
        // and mark them as visited
        visited.add(indexPair.toString());
      }
    });
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  } 
  // return size
  return size;
}


// matrix = [
//   [1,1,1,0,0],
//   [0,1,1,0,1],
//   [0,1,1,0,1],
// ]
islandSize(1, 1, matrix)
  // Create a visited set to store visited nodes
  // Create a stack, put the starting node in the stack
  // Put the stringified starting node in visited
  // Initialize size to 0
  // While the stack is not empty,
  // Pop the first node
  // DO THE THING (increment size by 1)
  // Then push all the UNVISITED neighbors on top of the stack
  // and mark them as visited
  // HINT: This is what your helper function `getNeighbors` is for
  // HINT: Remember, you're storing your visited nodes as strings!
  // return size
  // Your code here


module.exports = [getNeighbors, islandSize];
