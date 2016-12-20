import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

import Style from './user.scss';

class User extends Component {
    render(){
        let id = this.props.params.id
        let randomUserUrl = `https://randomuser.me/api/?seed=${id}`
        let xhr = new XMLHttpRequest();
        xhr.open("GET", randomUserUrl, false);
        xhr.send();
        let user = JSON.parse(xhr.response).results[0];

        return (
            <div className="container">
                <h1 className="capitalize">User #{id} : {user.name.first} {user.name.last}</h1>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 user-profile">
                        <div className="well well-sm">
                            <div className="row">
                                <div className="col-sm-6 col-md-4">
                                    <img src={user.picture.large} alt="" className="img-rounded img-responsive" />
                                </div>
                                <div className="col-sm-6 col-md-8 content">
                                    <h4 className="capitalize">{user.name.first} {user.name.last}</h4>
                                    <p>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i><span className="capitalize">{user.location.city}, {user.location.state}</span>
                                        <br />
                                        <i className="fa fa-envelope-o" aria-hidden="true"></i>{user.email}
                                        <br />
                                        <i className="fa fa-calendar-o" aria-hidden="true"></i>{user.registered}
                                        <br />
                                        <i className="fa fa-phone" aria-hidden="true"></i>{user.phone}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to={"/users"} className="btn btn-primary">
                    Back to the list
                </Link>
            </div>
        );
    }
}

export default User