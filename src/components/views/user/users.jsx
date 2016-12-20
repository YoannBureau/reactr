import React, { Component } from 'react';
import { Link } from 'react-router';

import Style from './users.scss';

class Users extends Component {
    render(){
        let data = [1, 2, 3, 4, 5, 6, 8, 9, 10];
        
        let dataNode = data.map((item) => {
            return (
                <Link
                    to={"/users/"+item}
                    className="list-group-item"
                    key={item}>
                    User #{item}
                </Link>
            )
        });

        return (
            <div>
                <h1>Users page</h1>
                <div className="list-group">
                    {dataNode}
                </div>
            </div>
        );
    }
}

export default Users
