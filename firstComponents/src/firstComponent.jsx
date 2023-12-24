import React from 'react'

function Greeting() { //ffc Functional component
    return ( <h1>Hello World</h1> );
}
//rafc react arrow function component
export const AlternativeGreeting = () => {
    return (
    <h1>Hello pal :)</h1>
    )
}

// With this class component the app shows nothing

// class AlternativeGreeting extends Component { //Alternative component Class component cc
//     state = {  } 
//     render() { 
    //         return (<h1>Hello Pal :)</h1>);
    //     }
    // }
    
    export {Greeting};  // exports this component  
    
