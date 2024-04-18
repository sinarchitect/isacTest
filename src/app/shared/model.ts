import { Dispatch, SetStateAction } from "react";

export type SharedContextModel = {
    state: { [key: string]: any }
    setState: Dispatch<SetStateAction<{ [key: string]: any }>>
};