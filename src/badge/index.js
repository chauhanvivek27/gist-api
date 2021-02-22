import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Badge extends PureComponent {
    render() {
        const { files } = this.props;
        return (
            <ul>
                {files.map((language, index) => {
                    return (<li className="badge" key={index}>{language}</li>);
                })}
            </ul>
        );
    }
}

Badge.propTypes = {
    files: PropTypes.array.isRequired
}

