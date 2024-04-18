import { ChangeEventHandler, Dispatch, Fragment, SetStateAction } from "react";

const ComponentE: React.FC<{ state: { [key: string]: any }, setState: Dispatch<SetStateAction<{ [key: string]: any }>> }> = ({ setState, state }) => {

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
            <input aria-label="Component E Input" value={state.firstname ?? ""} onChange={changeSharedState} />
            <p>
                Im Componet E and Im Receving Shared State Named:{`${state.firstname ?? ""}`}
            </p>
        </Fragment>
    );
}

export default ComponentE;