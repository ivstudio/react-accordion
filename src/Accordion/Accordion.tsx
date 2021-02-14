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
        const toggleElem = children[0];
        const collapseElem = children[1];

        const isExpanded = expanded === toggleElem.props.id;
        const toggleElemCloned = React.cloneElement(toggleElem, {
          toggle: (id: string) => onChange(id),
          isExpanded
        });

        return (
          <AccordionItem>
            {toggleElemCloned}
            <AnimatePresence initial={false}>
              {isExpanded && collapseElem}
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
