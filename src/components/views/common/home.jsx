import React, { Component } from 'react';

import Style from './home.scss';

class Home extends Component {
    render(){
        return (
            <div>
                <div className="jumbotron lead">
                    <h1>Hello developers!</h1>
                    <p className="lead">
                        This <i>ready-and-simple-to-use</i> boilerplate includes react, react-router, sass, bootstrap, font awesome and a few common dev packages.    
                    </p>
                    <p><a className="btn btn-lg btn-primary btn-github" href="https://github.com/YoannBureau/reactr" target="_blank" role="button"><i className="fa fa-github fa-2x"></i> Go to GitHub Repository</a></p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Want to add a new view?</h2>
                        <p>
                            As simple as 1-2-3:
                        </p>
                        <ol>
                            <li><i className="fa fa-file-o" aria-hidden="true"></i> Create your view in <strong>/src/views</strong> directory</li>
                            <li><i className="fa fa-road" aria-hidden="true"></i> Add you route in <strong>/src/views/application.jsx</strong></li>
                            <li><i className="fa fa-link" aria-hidden="true"></i> Add a link in the navbar in <strong>/src/views/common/layout.jsx</strong></li>
                        </ol>
                    </div>
                    <div className="col-lg-6">
                        <h2>Include third party easily</h2>
                        <p>
                            Import third party css or js files in <strong>src/main.js</strong>, like we already did for Bootstrap and Font Awesome. Yep, that's all.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Everything is packed and dev-ready</h2>
                        <p>
                            Webpack do the job, both JS and CSS. To start the webserver, simply type <code>npm start</code> and navigate to localhost:4444.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <h2>But also ready to deploy!</h2>
                        <p>
                            Job done, want to build? Type <code>gulp dist</code>, then browse <strong>/dist</strong> directory and get your packed files.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home