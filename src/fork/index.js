import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { fetchForkGists } from '../redux/actions/gist';

class Fork extends PureComponent {
    componentDidMount() {
        const gistId = this.props.gistId;
        this.props.fetchForkGists(gistId);
      }
    render() {
        console.log('this.props.ForkGist', this.props.ForkGist);
        const { forks } = this.props.ForkGist;
        console.log('forks', forks);
        let forkArr = [];
        if(forks.length >0 ) {
            forkArr = forks.slice(0, 3);
        }

        return (
            <ul className="indent-left">
                {forkArr.map((fork, index) => {
                    return (
                        <li key={index}>
                            <a href={`https://gist.github.com/${fork.id}`} target="_blank">
                                {/* <Avatar avatarUrl={fork.user.avatar_url} name={fork.user.login} /> */}
                                <img key="image" src={fork.user.avatar_url} alt={fork.user.login} className="avatar"/>,
                                <span key="username" className="text-secondary">{fork.user.login}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    ForkGist: state.singleGistReducer
  })
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchForkGists: (gistId) => {
            dispatch(fetchForkGists(gistId));
        } 
    }
  }
  let ForkDetails = connect(mapStateToProps, mapDispatchToProps)(Fork);
  export default ForkDetails;

