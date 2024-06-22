import React from 'react';
import './Table.css';

const Table = () => {
    return (
        <div className="table-container">
            <h3>Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Soumik Neogi</td>
                        <td>Admin</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
