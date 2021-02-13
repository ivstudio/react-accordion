import styled from "styled-components";
import { motion } from "framer-motion";
import is from "styled-is";

export const Container = styled.section`
  width: 100%;
  font-size: 16px;
  line-height: 1.4;
  font-family: sans-serif;
`;

export const AccordionItem = styled.div`
  color: #666666;
  background-color: #eeeeee;
  margin-bottom: 12px;
  padding: 12px 20px;
  border-radius: 2px;
`;

export const TogglePanel = styled.div<{ expanded: boolean }>`
  ${is("expanded")`
         margin-bottom: 8px;
    `};
  cursor: pointer;
  display: flex;
`;

export const Content = styled.div`
  font-weight: 600;
  flex: 1;
`;

export const CollapsePanel = styled(motion.div)``;
export const Icon = styled.span``;
