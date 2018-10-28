import React from 'react';
import NotesTable from './NotesTable';

import axios from 'axios';
import Pusher from 'pusher-js';

const socket = new Pusher('PUSHER_KEY', {
    cluster: 'PUSHER_CLUSTER',
    encrypted: true
});

export default class ConnectedNotesTable extends React.Component {
    state = {
        notes: []
    };
    async componentDidMount() {
        let response = await axios.get('http://localhost:8080/notes');
        this.setState(response.data);

        const channel = socket.subscribe('notes');
        channel.bind('notes', (data) => {
            this.setState(data);
        });
    }
    render() {
        return <NotesTable notes={this.state.notes} />;
    }
}