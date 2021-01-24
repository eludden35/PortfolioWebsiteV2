import React from "react";
import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";

const MagicOcean = [
    "Web Developer.",
    "Front-End Engineer.",
    "Full-Stack Engineer.",
    "HIRE!"
];

let index = 0;

const Magic = (props) => {
    const [magicName, setMagicName] = useState("");
    const intervalRef = useRef({});
    const name = useTypewriter(magicName);
    useEffect(
        () => {
        intervalRef.current = setInterval(() => {
          // index = index + 1 > 2 ? 0 : ++index + 1;
            setMagicName(MagicOcean[index]);
            index = index > 2 ? 0 : ++index;
        }, 3500);
        return function clear() {
            clearInterval(intervalRef.current);
        };
        },
        [magicName]
    );
    return (
        <div className="App">
            <h3 className="cursor">Your next {name}</h3>
        </div>
    );
}

export default Magic;