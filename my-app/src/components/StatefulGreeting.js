import React, {
    Component
} from 'react';

class StatefulGreeting extends Component {
    render() {
        return <
            h1 > Hello, {
                this.props.name
            }, {
                this.props.greeting
            } < /h1>
    }

}

export default StatefulGreeting