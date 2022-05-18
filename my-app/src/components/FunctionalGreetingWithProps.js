import React from 'react';

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <
        h1 > Hello {
            props.name
        }!

        {
            props.greeting
        }

    I see you 're {props.age}. < /h1>
}

export default FunctionalGreetingWithProps