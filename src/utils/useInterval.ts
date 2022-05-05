import { useEffect, useState } from "react";

export const useInterval = (milliseconds: number) => {
    const [timestamp, setTimestamp] = useState<number>(Date.now());

    useEffect(() => {
        const inrevalId = setInterval(() => {
            setTimestamp(Date.now());
        }, milliseconds);
        return () => {
            clearInterval(inrevalId);
        };
    }, [milliseconds]);

    return timestamp;
};
