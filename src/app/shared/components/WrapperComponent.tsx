'use client'
import { useState } from "react";
import ComponentE from "./ComponentE";
import ComponentF from "./ComponentF";

const WrapperComponent = () => {
    const [state, setState] = useState({})
    return (
        <>
            <ComponentE setState={setState} state={state} />
            <ComponentF setState={setState} state={state} />
        </>
    );
}

export default WrapperComponent;