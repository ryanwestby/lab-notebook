import React from 'react';
import { Form, Header, Segment, Button } from 'semantic-ui-react'

export default class NewNotesForm extends React.Component {
    state = {
        name: '',
        note: ''
    };
    onChangeName = this._onChangeName.bind(this);
    onChangeNote = this._onChangeNote.bind(this);
    onSubmit = this._onSubmit.bind(this);
    render() {
        return (
            <div className="ui container">
                <Segment vertical>
                    <Header>New Result</Header>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='Name' value={this.state.name} onChange={this.onChangeName} />
                        </Form.Field>
                        <Form.Field>
                            <label>Note</label>
                            <input placeholder='Note' value={this.state.note} onChange={this.onChangeNote} />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Segment>
            </div>
        );
    }
    _onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    _onChangeNote(e) {
        this.setState({
            note: e.target.value
        });
    }
    _onSubmit() {
        const payload = {
            name: this.state.name,
            note: this.state.note
        };
        fetch('http://localhost:8080/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        this.setState({
            name: '',
            note: ''
        });
    }
}