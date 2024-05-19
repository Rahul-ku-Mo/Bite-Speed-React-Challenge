import { Handle, Position } from "reactflow";
import { FaWhatsapp } from "react-icons/fa";
import { useContext } from "react";
import { NodeContext } from "../../context/node-context";

function CustomMessageNode({ selected, data, id }) {
  const { setSelectedNode, nodes } = useContext(NodeContext);

  const handleClick = () => {
    setSelectedNode({
      nodeValue: data.content,
      nodeId: id,
      nodeIndex: nodes.findIndex((node) => node.id === id),
    });
  };

  return (
    <div
      className={`rounded-md shadow-lg w-60 ${
        selected && "border-[1px] border-blue-800"
      }`}
      onClick={handleClick}
    >
      <Handle type="target" position={Position.Left} />
      <div className="flex flex-col">
        <div className="text-xs font-semibold px-3 py-1 bg-green-300 rounded-t-md flex items-center gap-2 justify-between">
          Send Message
          <FaWhatsapp className="text-green-800 bg-white rounded-full p-0.5 size-4" />
        </div>
        <div className="text-xs p-3 bg-white rounded-b-md">{data.content}</div>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default CustomMessageNode;
