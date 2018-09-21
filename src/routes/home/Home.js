/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Relay from 'react-relay/classic';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    viewer: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1> SUCCESS!!!! </h1>
          <h2>
            {' '}
            Welcome {this.props.viewer.name} ({this.props.viewer.email}){' '}
          </h2>
        </div>
      </div>
    );
  }
}

export default Relay.createContainer(withStyles(s)(Home), {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        name
        email
      }
    `,
  },
});
