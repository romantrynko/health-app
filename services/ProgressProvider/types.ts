import type { ReactNode } from "react";

export interface IProgressProviderProps {
    children: (val: number) => JSX.Element;
    valueStart: number;
    valueEnd: number
}
