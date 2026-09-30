"use client"

import { useState, useEffect } from "react";
const mq = (query) => {
    console.log(window.matchMedia(query).matches)
    return window.matchMedia(query).matches;
};

const useMediaQuery = (query) => {
    const [isMatches, setMatches] = useState(mq(query));

    const update = () => setMatches(mq(query));

    useEffect(() => {
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("resize", update);
        };
    }, []);

    return isMatches;
};

export default useMediaQuery