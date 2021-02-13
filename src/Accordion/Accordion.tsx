import React from "react";
import { AnimatePresence } from "framer-motion";
import Collapse from "./AccordionCollapse";
import Toggle from "./AccordionToggle";
import { Container, AccordionItem } from "./Accordion.styles";

interface IAccordion {
  children: any;
  expanded: string;
  onChange: (expandedId: string) => void;
}

interface IAccordionItem {
  children: any;
}

const Accordion = ({ children, expanded = "", onChange }: IAccordion): any => {
  return (
    <Container>
      {React.Children.map(children, ({ props: { children } }) => {
        const { id } = children[0].props;
        const isExpanded = expanded === id;
        const panelToggle = React.cloneElement(children[0], {
          toggle: (id: string) => onChange(id),
          isExpanded
        });

        return (
          <AccordionItem>
            {panelToggle}
            <AnimatePresence initial={false}>
              {isExpanded && children[1]}
            </AnimatePresence>
          </AccordionItem>
        );
      })}
    </Container>
  );
};

Accordion.Toggle = Toggle;
Accordion.Collapse = Collapse;
Accordion.Item = ({ children }: IAccordionItem) => children;

export default Accordion;
