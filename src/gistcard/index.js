import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class GistCard extends PureComponent {
    render() {
        const {gistData} = this.props;
        const noOfFiles = Object.keys(gistData.files).length;
        return (
                <div className="card">
                    <p className="lead">{(gistData.description) || 'No Description'}</p>
                    <p className="text-secondary">{noOfFiles} {(noOfFiles > 1) ? 'Files' : 'File'}</p>
                </div>
        );
    }
}

GistCard.propTypes = {
    gistData: PropTypes.object.isRequired
}

