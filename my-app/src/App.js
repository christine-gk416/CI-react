import React from 'react';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps'
import StatefulGreeting from './components/StatefulGreeting'
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback'
import StatefulGreetingWithCallbackPrevState from './components/StatefulGreetingWithCallbackPrevState'


function App() {
    return ( <
        div className = "App" > {
            /* commented out code in react */
        }

        {
            /*<
                        FunctionalGreetingWithProps greeting = 'Nice to meet you!'
                        name = 'Mike'
            age = '32' / >*/
        }

        {
            /* <
            StatefulGreeting greeting = "I'm a stateful class component"
            name = "Bob" / >
            */

        }


        {
            /*
                        <
                        StatefulGreetingWithCallback / >
                */
        }

        <
        StatefulGreetingWithCallbackPrevState / >

        <
        /
        div >

    );


}

export default App;