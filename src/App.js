import { useState } from "react";

import ToolTip from "./ToolTip";
import Dropdown from "./Dropdown";
import AccordionFlush from "./components/AccordionFlush";
import Accordion from "./components/Accordion";
import Gap from "./components/Gap";


function App() {
  const listItems = ["Situation", "Task", "Action", "Result"];
  const [active, setActive] = useState("")
  console.log(setActive);
  
  return (
    <>
      <ToolTip position="top" text="Tooltip on top">
        Tooltip button
      </ToolTip>
      <ToolTip position="right" text="Tooltip on right">
        Tooltip button
      </ToolTip>
      <ToolTip position="bottom" text="Tooltip on bottom">
        Tooltip button
      </ToolTip>
      <ToolTip position="left" text="Tooltip on left">
        Tooltip button
      </ToolTip>
      <Dropdown data={listItems}>Dropdown button</Dropdown>
      <AccordionFlush title="Title1" active={active} setActive={setActive}>
        This is the first item's accordion body. It is shown by default, until
        the collapse plugin adds the appropriate classes that we use to style
        each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions.
      </AccordionFlush>
      <AccordionFlush title="Title2" active={active} setActive={setActive}>
        You can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the .accordion-body, though the transition does limit overflow.
        This is the first item's accordion body. It is shown by default, until
        the collapse plugin adds the appropriate classes that we use to style
        each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions.
        This is the first item's accordion body. It is shown by default, until
        the collapse plugin adds the appropriate classes that we use to style
        each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions.
      </AccordionFlush>
      <AccordionFlush title="Title3" active={active} setActive={setActive}> 
      This is the first item's accordion body. It is shown by default, until
      the collapse plugin adds the appropriate classes that we use to style
      each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions.</AccordionFlush>
      <Gap/>
      <Accordion title="Accordion-item 1" btnText="Click">This is the first item's accordion body. It is shown by default, until
        the collapse plugin adds the appropriate classes that we use to style
        each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions.</Accordion>
      <Accordion title="Accordion-item 2" btnText="Click">You can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the .accordion-body, though the transition does limit overflow.</Accordion>
        <Accordion title="Accordion-item 3" btnText="Click">You can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the .accordion-body, though the transition does limit overflow.</Accordion>
    </>
  );
}

export default App;
