import ReactFlow, { Background, Controls, addEdge } from "reactflow";

import { useRef, useState, useCallback, useContext } from "react";
import "reactflow/dist/style.css";
import CustomMessageNode from "./nodes/custom-nodes";
import { NodeContext } from "../context/node-context";
import { toast } from "sonner";

// Do not cause any re renders.
const nodeTypes = { messageNode: CustomMessageNode };

const FlowChart = () => {
  const reactFlowWrapper = useRef(null);

  const {
    setEdges,
    setNodes,
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    getId,
  } = useContext(NodeContext);

  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (connection) => {
      if (connection.target === connection.source) return;

      const isReverseEdgeExist = edges.some(
        (edge) =>
          edge.source === connection.target && edge.target === connection.source
      );

      if (isReverseEdgeExist) return;

      setEdges((eds) => addEdge(connection, eds));
    },
    [edges, setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: { content: `Test Message` },
      };

      setNodes((nds) => nds.concat(newNode));

      toast.success("New node created");
    },
    [getId, reactFlowInstance, setNodes]
  );
  return (
    <div
      className="flow-background min-h-full absolute inset-0 pt-[2.8rem]"
      ref={reactFlowWrapper}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
