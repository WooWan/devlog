import React, { useContext, useState } from "react";

const BreadcrumbContext = React.createContext([]);
const BreadcrumbProvider = ({ children }: { children: React.ReactNode }) => {
  const portalNodeState = useState();

  return (
    <BreadcrumbContext.Provider value={portalNodeState}>
      {children}
    </BreadcrumbContext.Provider>
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
