import FlowChart from "./components/flow-chart";

import SettingsPanel from "./components/settings-panel";
import ActionPanel from "./components/action-panel";

import { NodeContextProvider } from "./context/node-context";
import { ReactFlowProvider } from "reactflow";
import { Toaster } from "sonner";

export default function App() {
  return (
    <ReactFlowProvider>
      <NodeContextProvider>
        <main>
          <ActionPanel />
          <div className="flex  sm:flex-nowrap flex-wrap">
            <FlowChart />
            <SettingsPanel />
          </div>
        </main>
      </NodeContextProvider>
      <Toaster position="top-center" richColors invert />
    </ReactFlowProvider>
  );
}
