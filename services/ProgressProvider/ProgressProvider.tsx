import { useEffect, useState } from "react";
import { IProgressProviderProps } from './types';

const ProgressProvider = ({ valueStart, valueEnd, children }: IProgressProviderProps) => {
    const [value, setValue] = useState(valueStart);

    useEffect(() => {
        setValue(valueEnd);
    }, [valueEnd]);

    return children(value);
};
export default ProgressProvider;