import { IoMdArrowBack } from "react-icons/io";
import { useContext, useEffect, useState, useCallback } from "react";
import { NodeContext } from "../context/node-context";
import { BiMessageRoundedDots } from "react-icons/bi";

const SettingsPanel = () => {
  const { selectedNode, setSelectedNode, setNodes, nodes } =
    useContext(NodeContext);

  const [value, setValue] = useState(selectedNode?.nodeValue);

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (value === "") return;

    const newNodes = nodes.map((node) => {
      if (node.id === selectedNode.nodeId) {
        node.data.content = value;
      }

      return node;
    });

    setNodes(newNodes);
  };

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const handleBack = useCallback(() => {
    setSelectedNode(null);
  },[setSelectedNode])

  useEffect(() => {
    if (selectedNode !== null) {
      setValue(selectedNode.nodeValue);
    }
  }, [selectedNode]);

  return (
    <aside className="grow fixed right-0 flow-config h-full border-l-2 border-zinc-200 ">
      {selectedNode === null ? (
        <div
          draggable
          onDragStart={(event) => onDragStart(event, "messageNode")}
          className="text-blue-800 m-2 cursor-grab  rounded-md border-[1px] border-blue-800 bg-white flex flex-col items-center justify-center h-20 max-w-40 text-sm"
        >
          <BiMessageRoundedDots className="size-4" />
          Message
        </div>
      ) : (
        <div>
          <div className="relative text-center w-full flex items-center justify-center border-y-2 border-zinc-200">
            <IoMdArrowBack
              className="absolute left-4 z-10 cursor-pointer"
              onClick={handleBack}
            />
            <span className="text-sm font-medium tracking-tight py-3">
              Node : <span className="font-bold">{selectedNode?.nodeId}</span>
            </span>
          </div>
          <form className="form p-3 grid gap-2" onSubmit={submitForm}>
            <label htmlFor="message" className="text-sm text-zinc-400">
              Text
            </label>
            <textarea
              id="message"
              name="message"
              value={value}
              onChange={handleChangeValue}
              className="w-full min-h-24 text-xs p-2 border-[1px] border-zinc-200 rounded-md font-medium focus:outline-dashed"
              placeholder="test message"
            />
            <button className="border-[1px] rounded-md w-full flex items-center justify-center text-sm py-2 font-medium bg-zinc-200 hover:bg-zinc-400 transition-all ease-linear tracking-tighter">
              Apply changes
            </button>
          </form>
        </div>
      )}
    </aside>
  );
};
export default SettingsPanel;
