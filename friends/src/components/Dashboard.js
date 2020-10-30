import React from 'react';

const Dashboard = (props) => {
    console.log(props);
    return(
        <div className="box">
            <h2 className="title is-4">Dashboard</h2>
            <p>{props.username}</p>
        </div>
    );
};

export default Dashboard;