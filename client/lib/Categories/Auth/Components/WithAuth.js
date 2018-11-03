import React from 'react';

import LocalStorage from '../../LocalStorage';
import {Auth} from 'aws-amplify';

/**
 * @param {React.Component} WrappedComponent
 * @returns {React.Component}
 */
function WithAuth(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        ready: false,
        session: null
      };

      this.handleOnSignIn = this.handleOnSignIn.bind(this);
      this.handleOnSignUp = this.handleOnSignUp.bind(this);
      this.handleOnSignOut = this.handleOnSignOut.bind(this);
    }

    async componentDidMount() {
      await LocalStorage.init();
      let session;
      try {
        session = await Auth.currentSession();
      } catch (err) {
        console.log(err);
        session = null;
      }
      this.setState({session, ready: true});
    }

    handleOnSignIn(session) {
      this.setState({session});
    }

    handleOnSignUp() {}

    handleOnSignOut() {
      Auth.signOut();
      this.setState({session: null});
    }

    render() {
      const {ready, session} = this.state;
      console.log('Rendering HOC', ready, !!session);
      const {
        onSignIn,
        onSignUp,
        doSignOut,
        ...otherProps
      } = this.props;

      return (ready && (<WrappedComponent session={session} onSignIn={onSignIn || this.handleOnSignIn} onSignUp={onSignUp || this.handleOnSignUp} doSignOut={doSignOut || this.handleOnSignOut} auth={Auth} {...otherProps}/>));
    }
  }
}

export default WithAuth;
