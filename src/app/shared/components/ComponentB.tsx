'use client'
import { ChangeEventHandler, Fragment, useContext } from "react";
import { SharedContext } from "../context";

const ComponentB = () => {
    const { setState, state } = useContext(SharedContext);
    // debugger
    const changeSharedState: ChangeEventHandler<HTMLInputElement> = (e) => {
        setState(prev => {
            return {
                ...prev,
                firstname: e.target.value
            }
        })
    }

    return (
        <Fragment>
            <input  aria-label="Component B Input" value={state.firstname ?? ""} onChange={changeSharedState} />
            <p>
                Im Componet B and Im Receving Shared State Named:{`${state.firstname ?? ""}`}
            </p>
        </Fragment>
    );
}

export default ComponentB;