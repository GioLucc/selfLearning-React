import { useState } from "react";

//nombre func arrow
// components on pascal case
// const Button = () => {
//     return (
//         <>
//             <button onClick={handeClick()}>
//                 I'm a button
//             </button>
//             <button onClick={function () { console.log("i'm an ninja button") }}>
//                 I'm a button
//             </button>
//         </>
//     )
// }

export const CounterApp = ({ value }) => {

    //hook const, variable, modifier,       prop
    const [counter, setCounter] = useState(value);


    function handleClick() {
        setCounter(counter + 1);
    }
    return (
        <>
            <h1> Counter: {counter} </h1>
            <button onClick={handleClick}>
                Suma uno
            </button>
        </>
    )
}
