import { useContext, useMemo, useCallback } from "react";
import { NodeContext } from "../context/node-context";
import { toast } from "sonner";

const ActionPanel = () => {
  const { edges, nodes } = useContext(NodeContext);

  const edgelessNodes = useMemo(
    () =>
      nodes.filter(
        (node) =>
          !edges.some(
            (edge) => edge.source === node.id || edge.target === node.id
          )
      ),
    [edges, nodes]
  );

  const handleClick = useCallback(() => {
    if (edgelessNodes.length !== 0) {
      toast.error("Flow cannot be saved!!");
      return;
    }

    toast.success("Flow saved successfully!!");
  }, [edgelessNodes.length]);

  return (
    <div className=" w-full p-2 bg-zinc-100 text-sm relative z-20 flex justify-end px-10">
      <button
        disabled={nodes.length === 0}
        onClick={handleClick}
        className="text-sm tracking-tighter disabled:opacity-50 disabled:cursor-not-allowed font-medium border-2 border-blue-800 py-1 rounded-md text-blue-800 cursor-pointer  px-4"
      >
        Save Changes
      </button>
    </div>
  );
};
export default ActionPanel;
