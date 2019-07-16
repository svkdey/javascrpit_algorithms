// what dijkstra algo?=>find the shortest way btw 2 vertex of graph
//
class PriortyQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        this.values.push({ value, priority })
        this.sort();
    }
    dequeue() {
        return this.values.shift()
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}

class WeightedGraph{
    constructor(){
        this.adjancyList={};
    }
    addVertex(vertex){
        if(!this.adjancyList[vertex]) {
            this.adjancyList[vertex]=[]
        }
    }
    addEdge(vertex1,vertex2,weight){
        this.adjancyList[vertex1].push({node:vertex2,weight})
        this.adjancyList[vertex2].push({ node:vertex1, weight})
    }
    Dijkstra(start,finish){
        const nodes=new PriortyQueue();
        const distances={};
        const previous={};
        let smallest;
        let path=[];
        // console.log(this.adjancyList)
        //build up initial state of distances
        for(let vertex in this.adjancyList){
            if(vertex===start){
                distances[vertex]=0;
                nodes.enqueue(vertex,0)
            }else{
                distances[vertex]=Infinity;
                nodes.enqueue(vertex,Infinity);
            }
            previous[vertex]=null
           
        }
        // console.log(nodes.values.length)
        //run the priorty queue list
        while(nodes.values.length){
            smallest=nodes.dequeue().value;
            
            if(smallest===finish){
                //we are done
                //build up path to return at end
               while(previous[smallest]){
                path.push(smallest);
                smallest=previous[smallest]
               }
               break;}
            if(smallest||distances[smallest]!==Infinity){
                    // console.log(smallest)
                for(let neighbour in this.adjancyList[smallest]){
                    let nextNode=this.adjancyList[smallest][neighbour];
                    // console.log(nextNode)
                    //calculate distance to neighbouring distance
                    let candidate=distances[smallest]+nextNode.weight;
                    let nextNeighbour = nextNode.node;
                    if(candidate<distances[nextNeighbour]){
                        //updating new smallest distance to neighbour
                        distances[nextNeighbour]=candidate;
                        previous[nextNeighbour]=smallest;
                        //enqueue in priorty queue with new priorty
                        nodes.enqueue(nextNeighbour,candidate)

                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}
const graph=new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A","D"))


// const pqueue=new PriortyQueue();
// pqueue.enqueue("gym", 4)
// pqueue.enqueue("code",1)
// pqueue.enqueue("game",2)

// console.log(pqueue)