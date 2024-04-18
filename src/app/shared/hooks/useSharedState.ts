import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const sharedState: { [key: string]: any } = {};

const useSharedState = (key: string, initVal: any): [{ [key: string]: any }, Dispatch<SetStateAction<{ [key: string]: any }>>] => {

    const [state, setState] = useState(() => {
        if (!(key in sharedState)) {
            sharedState[key] = initVal;
        }
        return sharedState
    });

    sharedState[key] = state[key];

    return [state, setState];
};

export default useSharedState;