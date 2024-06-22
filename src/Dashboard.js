import React from 'react';
import Table from './Table';
import Chart from './Chart';
import Calendar from './Calendar';
import Kanban from './Kanban';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <Table />
            <Chart />
            <Calendar />
            <Kanban />
        </div>
    );
};

export default Dashboard;
