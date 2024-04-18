"use client";
import { createContext, useLayoutEffect, useState } from "react";
import { SharedContextModel } from "@/app/shared/model";

export const SharedContext = createContext<SharedContextModel>({
  setState: () => { },
  state: {}
});

const SharedContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState({})
  return (
    <>
      <SharedContext.Provider
        value={{ state, setState }}
      >
        {children}
      </SharedContext.Provider>
    </>
  );
};
export default SharedContextProvider;
