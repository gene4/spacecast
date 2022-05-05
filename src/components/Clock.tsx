import React, { useEffect, useState, useRef } from "react";
import { useInterval } from "../utils/useInterval";
import { formatTime } from "../utils/formatTime";
import styles from "./Clock.module.css";

function Clock() {
    const [style, setStyle] = useState<React.CSSProperties>();
    const ref = useRef<HTMLDivElement>(null);

    const timestamp = useInterval(1000);

    const formatted = formatTime(timestamp);

    useEffect(() => {
        const width = ref.current?.offsetWidth;
        if (width) {
            setStyle({ width });
        }
    }, [timestamp]);

    return (
        <div className={styles.container} style={style}>
            <div className={styles.clock} ref={ref}>
                {formatted}
            </div>
        </div>
    );
}

export default Clock;
