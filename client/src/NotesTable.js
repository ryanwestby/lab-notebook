import React from 'react';
import { Table, Header, Segment } from 'semantic-ui-react'

export default function NotesTable({notes}) {
    const rows = notes.map(((result, index) => {
        return (
            <Table.Row key={ index }>
                <Table.Cell>{ result.name }</Table.Cell>
                <Table.Cell>{ result.note }</Table.Cell>
            </Table.Row>
        );
    }));
    return (
        <div className="ui container">
            <Segment>
                <Header>Notes </Header>
                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Note</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { rows }
                    </Table.Body>
                </Table>
            </Segment>
        </div>
    );
}