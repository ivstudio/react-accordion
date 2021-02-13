import React, { useState } from "react";
import Accordion from "./Accordion/Accordion";
import { items } from "./data";

export default function App() {
  const [active, setActive] = useState("002");

  return (
    <Accordion onChange={(panel) => setActive(panel)} expanded={active}>
      {items.map(({ header, description, id }) => (
        <Accordion.Item key={id}>
          <Accordion.Toggle id={id}>{header}</Accordion.Toggle>
          <Accordion.Collapse>{description}</Accordion.Collapse>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
