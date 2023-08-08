import React, { ReactNode } from "react";

interface ChildProps {
  children: ReactNode;
}

const If: React.FC<ChildProps> = ({ children }) => {
  return <>{children}</>;
};

const Else: React.FC<ChildProps> = ({ children }) => {
  return <>{children}</>;
};

type IfElseChild =
  | React.ReactElement<typeof If>
  | React.ReactElement<typeof Else>;

interface IfElseProps {
  condition: boolean;
  children: [IfElseChild, IfElseChild];
}

const IfElse: React.FC<IfElseProps> = ({ condition, children }) => {
  if (children[0]?.type !== If || children[1]?.type !== Else) {
    throw new Error(
      "<IfElse> must have an <If> component followed by an <Else> component."
    );
  }

  const [ifComponent, elseComponent] = children;

  return condition ? ifComponent : elseComponent;
};

export { IfElse, If, Else };
