import ColorBox from "./ColorBox";
import React from "react";

export default function App() {
    const name = "Lam";
    const age = 20;
    const isMale = true;
    const student ={
        name: "Phil Nguyen"
    };
    const colorList = ['red', 'green', 'blue'];
    return (
        <>
            <section>
                <ColorBox color="red"></ColorBox>
                <ColorBox color="green"></ColorBox>
                <ColorBox color="blue"></ColorBox>
            </section>
            <p>Hello, I'm {name}, I'm {age} - {isMale ? 'Male' : 'Female'}</p>
            {isMale ? <p>Male</p> : <p>Female</p>}
            {isMale && <p>Male</p>}
            {!isMale && <p>Female</p>}
        </>
    );

}