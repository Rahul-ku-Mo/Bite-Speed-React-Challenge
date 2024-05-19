import { createContext, useState } from "react";
import { useNodesState, useEdgesState } from "reactflow";
import { edges as initalEdges, nodes as initalNodes } from "../constants";

export const NodeContext = createContext();

let id = 0;
const getId = () => `dndnode_${id++}`;

export const NodeContextProvider = ({ children }) => {
  const [selectedNode, setSelectedNode] = useState(null);

  const [nodes, setNodes, onNodesChange] = useNodesState(initalNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initalEdges);

  return (
    <NodeContext.Provider
      value={{
        selectedNode,
        setSelectedNode,
        nodes,
        edges,
        setNodes,
        setEdges,
        onNodesChange,
        onEdgesChange,
        getId,
      }}
    >
      {children}
    </NodeContext.Provider>
  );
};
