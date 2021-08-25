import ToolTip from './ToolTip'
import Dropdown from './Dropdown'


function App() {
  const listItems = ['Situation','Task', 'Action', 'Result'];
  return (
    <>
     <ToolTip position="top" text="Tooltip on top">Tooltip button</ToolTip>
     <ToolTip position="right" text="Tooltip on right">Tooltip button</ToolTip>
     <ToolTip position="bottom" text="Tooltip on bottom">Tooltip button</ToolTip>
     <ToolTip position="left" text="Tooltip on left">Tooltip button</ToolTip>
     <Dropdown data={listItems}>Dropdown button</Dropdown>
    </>
  );
}

export default App;
