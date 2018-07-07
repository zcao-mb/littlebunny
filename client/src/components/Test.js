import React from 'react';
import { testServices } from '../services/testService';

export default class Test extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            values: []
        }
    }

    componentWillMount() {
        const self = this;

        testServices.getValues().then(function(data) {
            console.log(data);
            self.setState({ values: data });
        },
        function(error) {
            console.log(error);
            self.setState({ values: [] });
        });
    }

    render() {
        return (
            <div>
                <p>Test Component</p>
                <ul>
                    {this.state.values.map(value => 
                        <li key={value}>{value}</li>
                    )}
                </ul>
                <button className="btn btn-primary">Test Button</button>
            </div>
        )
    }
}