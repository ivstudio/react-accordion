import React, { ReactChild } from "react";
import { CollapsePanel } from "./Accordion.styles";

const variants = {
  open: { opacity: 1, height: "auto" },
  collapsed: { opacity: 0, height: 0 }
};

interface Props {
  children: ReactChild | ReactChild[];
}

const AccordionCollapse = ({ children }: Props) => (
  <CollapsePanel
    initial="collapsed"
    animate="open"
    exit="collapsed"
    variants={variants}
    transition={{ duration: 0.15, ease: [0.04, 0.62, 0.23, 0.98] }}
  >
    {children}
  </CollapsePanel>
);

export default AccordionCollapse;
