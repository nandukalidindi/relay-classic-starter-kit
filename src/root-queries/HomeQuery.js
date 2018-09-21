import Relay from 'react-relay/classic';

export default class extends Relay.Route {
  static queries = {
    viewer: () => Relay.QL`
      query {
        viewer(name: $name)
      }
    `,
  };

  static paramDefinitions: {
    userId: { required: true }
  }

  static routeName = 'HomeQuery';
}
