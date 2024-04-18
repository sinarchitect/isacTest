'use clinet'
import ComponentA from "./shared/components/ComponentA";
import ComponentB from "./shared/components/ComponentB";
import ComponentC from "./shared/components/ComponentC";
import ComponentD from "./shared/components/ComponentD";
import WrapperComponent from "./shared/components/WrapperComponent";
import SharedContextProvider from "./shared/context";

export default function Home() {
  return (
    <>
      {/* first strategy - success*/}
      <SharedContextProvider>
        <ComponentA />
        <ComponentB />
      </SharedContextProvider>
      {/* seccond strategy - fail*/}
      <ComponentC />
      <ComponentD />
      {/* third strategy - success*/}
      <WrapperComponent />
    </>

  );
}
