import * as React from 'react';

const Table = props => {
  try {
    return (
      <div>
        <button className="w3-button w3-teal" onClick={props.createAction}>
          Create
        </button>
        <table className="w3-table-all">
          <caption className="w3-black">
            <h3>Fruit</h3>
          </caption>
          <thead>
            <tr>
              {Object.entries(props.list[0]).map(([key], index) => (
                <th key={index}>{key}</th>
              ))}
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(props.list).map(([key, value]) => (
              <tr key={key}>
                {Object.entries(value).map(([meta1, meta2]) => (
                  <td key={meta1}>{String(meta2)}</td>
                ))}
                <td>
                  <button
                    className="w3-button w3-teal"
                    onClick={() => props.updateAction(value)}
                  >
                    Edit
                  </button>
                  <button
                    className="w3-button w3-teal"
                    onClick={() => props.detailsAction(value)}
                  >
                    Details
                  </button>
                  <button
                    className="w3-button w3-teal"
                    onClick={() => props.deleteAction(value)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <button className="w3-button w3-teal" onClick={props.createAction}>
          Create
        </button>
        <p>No Data Present</p>
      </div>
    );
  }
};

export default Table;
