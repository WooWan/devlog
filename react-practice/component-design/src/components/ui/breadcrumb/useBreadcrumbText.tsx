import React, { useContext, useState } from "react";

const BreadcrumbContexts = React.createContext([]);

const BreadcrumbProvider = ({ children }) => {
  const portalNodeState = useState();

  return (
    <Context.Provider value={portalNodeState}>{children}</Context.Provider>
  );
};

const useBreadcrumbContext = () => {
  const context = useContext(BreadcrumbContext);

  if (!context) {
    throw new Error("Missing BreadcrumbProvider.");
  }

  return context;
};

export default useBreadcrumbContext;
