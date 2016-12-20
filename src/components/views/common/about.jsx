import React, { Component } from 'react';

import Style from './about.scss';

class About extends Component {
    render(){
        return (
            <div>
                <h1>About Page</h1>
                <p>
                    This is a dummy page, like a lorem ipsum one but with more content, because it's nicer.
                </p>
                <blockquote>
                    <p>This company is incredible: zero customer, zero employee, zero cost!</p>
                    <footer>A random guy in <cite title="Source Title">Random Magazine</cite></footer>
                </blockquote>
                <p>
                    Feel free to contact us:
                </p>
                <address>
                    <strong>Fake Company, Inc.</strong><br />
                    1234 Fake Street, Suite 900<br />
                    Random City, GR 12345<br />
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
                <address>
                    <strong>Full Name</strong><br />
                    <a href="mailto:#">fake@company.com</a>
                </address>
            </div>
        );
    }
}

export default About