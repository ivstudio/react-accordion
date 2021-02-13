import React, { ReactChild } from "react";
import { TogglePanel, Content, Icon } from "./Accordion.styles";

interface Props {
  id: string;
  children: ReactChild | ReactChild[];
  toggle?: (id: string) => void;
  isExpanded?: boolean;
}

const AccordionToggle = ({
  id,
  children,
  toggle,
  isExpanded = false
}: Props) => {
  const handleClick = () => toggle && toggle(isExpanded ? "" : id);

  return (
    <TogglePanel onClick={handleClick} expanded={isExpanded}>
      <Content>{children}</Content>
      <Icon>{isExpanded ? "-" : "+"}</Icon>
    </TogglePanel>
  );
};

export default AccordionToggle;
