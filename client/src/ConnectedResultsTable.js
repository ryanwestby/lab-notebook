import React from 'react';
import ResultsTable from './ResultsTable';

import axios from 'axios';
import Pusher from 'pusher-js';

const socket = new Pusher('PUSHER_KEY', {
    cluster: 'PUSHER_CLUSTER',
    encrypted: true
});

export default class ConnectedResultsTable extends React.Component {
    state = {
        results: []
    };
    async componentDidMount() {
        let response = await axios.get('http://localhost:8080/results');
        this.setState(response.data);

        const channel = socket.subscribe('results');
        channel.bind('results', (data) => {
            this.setState(data);
        });
    }
    render() {
        return <ResultsTable results={this.state.results} />;
    }
}