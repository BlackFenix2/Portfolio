import * as React from 'react';
import { Button, Table } from 'semantic-ui-react';

const FruitTable = props => {
  try {
    return (
      <div>
        <Button onClick={props.createAction}>Create</Button>
        <Table celled striped>
          <caption>
            <h3>Fruit</h3>
          </caption>
          <Table.Header>
            <Table.Row>
              <TableHeaderRowGenerator entity={props} />
              {Object.entries(props.list[0]).map(([key], index) => (
                <Table.HeaderCell key={index}>{key}</Table.HeaderCell>
              ))}
              <Table.HeaderCell>Options</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {Object.entries(props.list).map(([key, value]) => (
              <Table.Row key={key}>
                {Object.entries(value).map(([meta1, meta2]) => (
                  <Table.Cell key={meta1}>{String(meta2)}</Table.Cell>
                ))}
                <Table.Cell>
                  <Button onClick={() => props.updateAction(value)}>
                    Edit
                  </Button>
                  <Button onClick={() => props.detailsAction(value)}>
                    Details
                  </Button>
                  <Button onClick={() => props.deleteAction(value)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <Button onClick={props.createAction}>Create</Button>
        <p>No Data Present</p>
      </div>
    );
  }
};

const TableHeaderRowGenerator = ({ entity }) => {
  return Object.entries(entity.list[0]).map(([key], index) => (
    <Table.HeaderCell key={index}>{key}</Table.HeaderCell>
  ));
};

export default FruitTable;
