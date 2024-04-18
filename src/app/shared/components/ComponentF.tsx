import { ChangeEventHandler, Dispatch, Fragment, SetStateAction } from "react";

const ComponentF: React.FC<{ state: { [key: string]: any }, setState: Dispatch<SetStateAction<{ [key: string]: any }>> }> = ({ setState, state }) => {

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
            <input aria-label="Component F Input" value={state.firstname ?? ""} onChange={changeSharedState} />
            <p>
                Im Componet F and Im Receving Shared State Named:{`${state.firstname ?? ""}`}
            </p>
        </Fragment>
    );
}

export default ComponentF;