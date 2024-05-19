# BiteSpeed React Challenge : https://bite-speed-react-challenge.vercel.app/

## Tech Stack (Fully Frontend):
- React - (Design Pattern: React Context)
- Vite - (Bundler)
- TailwindCSS (utility-first CSS framework)

## How to Run:
  ```
  git clone https://github.com/Rahul-ku-Mo/Bite-Speed-React-Challenge.git
  yarn
  yarn dev
  ```

## Components
- Flow Chart Component (Made using React-Flow)
- NodePanel and SettingPanel Component (Simple textArea component using TailwindCSS)
- ActionPanel (Simple save button for Flow)
- Toaster for notifications (Sonner)

## Optimizations
- useCallback for memoizing the submit and click functions
- useMemo for computing edgeless nodes
- Moving some functions out of the component. So that these functions won't be created while rerendering.

## Documentation and Features:
1. Drag and Drop: We can add new nodes to the flow chart by dragging and dropping. The type of the new node is determined by the application/reactflow data in the drag event.
2. Node Creation: We can create Nodes by dragging from the NodePanel on to the flow Background to create new Nodes. The current type is Message Node but it is scalable to different types as well.
3. Node Action: We can change the text message of the node by clicking on the node. A settingsPanel show in the right sidebar.
4. Edge Creation: We can create edges between nodes by clicking and dragging from one node to another. 
5. Cycle Detection: Edges cannot be created between a node and itself, and edges cannot be created in the reverse direction of an existing edge.
6. Toast Notification: While saving the flow or creating the new nodes , a toast notification pops up.


