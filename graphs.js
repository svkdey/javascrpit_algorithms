

//explain what is graph?
// =>nodes and their interconnection
//compare and contrast diff type of graph and their use cases in real world
//=>social Network,Mapping ,routing,visual hierarchy,file system optimization

// vertex=>a node
// edge=>connection between edges
//directed/undirected graph => polarity/direction of edge 
// weight/nonweighted=>edge with value is weighted graph.

//implement a graph using an adjancency list.
// =>adjency matrix ,adjency list
//traverse BY BFS and DFS.
//Undirected graph
class Graph{
    constructor(){
        this.adjecencyList={}
    }
    addVertex(vertex){
        if (!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=[];
        }
    }
    addEdge(vertex1,vertex2){
        if (!this.adjecencyList[vertex1]) { console.log(`${vertex1} does not exist`)}
        if (!this.adjecencyList[vertex2]) { console.log(`${vertex2} does not exist`) }
        if (this.adjecencyList[vertex1] && this.adjecencyList[vertex2]) {
            this.adjecencyList[vertex1].push(vertex2);
            this.adjecencyList[vertex2].push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2){
        this.adjecencyList[vertex1] = this.adjecencyList[vertex1].filter(
            vertex => vertex !== vertex2
        );
        this.adjecencyList[vertex2] = this.adjecencyList[vertex2].filter(
            vertex => vertex !== vertex1
        );
    }
    
        removeVertex(vertex){
            while (this.adjecencyList[vertex].length) {
                const adjacentVertex = this.adjecencyList[vertex].pop();
                this.removeEdge(vertex, adjacentVertex);
            }
            // console.log(this.adjecencyList)
            delete this.adjecencyList[vertex]
        
    }
    DFSRecursion(start){
        var result=[];
        var visited={};
        const adjecencyList = this.adjecencyList;
        
        (function DFS(vertex){
            //base condition
            if(!vertex) return null;
            //making key and pushing into result
            visited[vertex]=true;
            result.push(vertex);
            //now each node is not visited 
            // then push node and mark as true
            adjecencyList[vertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    return DFS(neighbour)
                }
            })
        })(start);

        return result;
    }
    DFSIteration(start){
        var stack=[];
        var result=[];
        var visited = {};
        stack.push(start);
        visited[start]=true;
        // console.log(this.adjecencyList[stack])
        while(stack.length){
            let currentVertex=stack.pop();
            result.push(currentVertex)
            this.adjecencyList[currentVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour]=true;
                    stack.push(neighbour)
                }
            })
            // console.log(this.adjecencyList[currentVertex])
        }
        return result;
    }
    BFS(start){
        const queue=[];
        var result = [];
        var visited = {};
        queue.push(start);
        visited[start] = true;
        while(queue.length){
            let currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjecencyList[currentVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour]=true;
                    queue.push(neighbour)
                }
            })
        }
        return result;
    }
}

let g=new Graph();
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addEdge("B","A");
// g.addEdge("C", "A");
// g.addEdge("C", "B");
// g.removeEdge("C", "B");
// g.removeVertex("A")
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
console.log(g.adjecencyList)

// console.log(g.DFSRecursion("A"))
console.log(g.DFSIteration("A"))
console.log(g.BFS("A"))



//GRAPH traversal
// use:
//peer to peer networking,web crawlers,finding "closest" ,shortest path problems like GPS,SOLVING MAGS,AIs
