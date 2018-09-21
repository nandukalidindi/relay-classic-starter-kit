/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLObjectType, GraphQLString } from 'graphql';

import { globalIdField } from 'graphql-relay';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Generic User',
  fields: () => ({
    id: globalIdField('User', user => user.id),
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
  }),
  interfaces: [],
});

export default UserType;
