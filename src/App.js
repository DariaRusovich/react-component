import ToolTip from './ToolTip'
import Dropdown from './Dropdown'
import Accordion from './components/Accordion';


function App() {
  const listItems = ['Situation','Task', 'Action', 'Result'];
  return (
    <>
     <ToolTip position="top" text="Tooltip on top">Tooltip button</ToolTip>
     <ToolTip position="right" text="Tooltip on right">Tooltip button</ToolTip>
     <ToolTip position="bottom" text="Tooltip on bottom">Tooltip button</ToolTip>
     <ToolTip position="left" text="Tooltip on left">Tooltip button</ToolTip>
     <Dropdown data={listItems}>Dropdown button</Dropdown>
      <Accordion title='Title1'> </Accordion>
      <Accordion title='Title2'> </Accordion>
      <Accordion title='Title3'> </Accordion>
    </>
  );
}

export default App;
