'use client'
import { ChangeEventHandler, Fragment } from "react";
import useSharedState from "../hooks/useSharedState";

const ComponentC = () => {
    const [state, setState] = useSharedState('lastname', '')

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
                Im Componet C and Im Receving Shared State Named:{`${state.lastname ?? ""}`}
            </p>
        </Fragment>
    );
}

export default ComponentC;