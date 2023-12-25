

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
    function handleClick() {
        value += 1
        console.log(value)
    }
    return (
        <>
            <h1> Counter: {value} </h1>
            <button onClick={handleClick}>
                Suma uno
            </button>
        </>
    )
}
