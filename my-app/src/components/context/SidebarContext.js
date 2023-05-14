import { useState, createContext } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [sidebarHidden, setSidebarHidden] = useState(false);

  return (
    <SidebarContext.Provider value={{ sidebarHidden, setSidebarHidden }}>
      {children}
    </SidebarContext.Provider>
  );
};
