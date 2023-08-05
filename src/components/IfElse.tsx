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

interface IfElseProps {
  condition: boolean;
  children: [React.ReactElement, React.ReactElement];
}

const IfElse: React.FC<IfElseProps> = ({ condition, children }) => {
  const filterName = condition ? "If" : "Else";
  return (
    <>
      {React.Children.toArray(children).filter(
        (child) => child?.type?.name === filterName
      )}
    </>
  );
};

export { IfElse, If, Else };
