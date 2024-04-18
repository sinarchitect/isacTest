'use client'
import { ChangeEventHandler, Fragment } from "react";
import useSharedState from "../hooks/useSharedState";

const ComponentD = () => {
    const [state, setState] = useSharedState('lastname', '')
    // debugger
    const changeSharedState: ChangeEventHandler<HTMLInputElement> = (e) => {
        setState(prev => {
            return {
                ...prev,
                lastname: e.target.value
            }
        })
    }

    return (
        <Fragment>
            <input value={state.lastname ?? ""} onChange={changeSharedState} />
            <p>
                Im Componet D and Im Receving Shared State Named:{`${state.lastname ?? ""}`}
            </p>
        </Fragment>
    );
}

export default ComponentD;