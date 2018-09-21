/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

import { nodeDefinitions, fromGlobalId } from 'graphql-relay';

import UserType from './types/UserType';

const GENERIC_USER = {
  id: 'random_id',
  name: 'Anonymous',
  email: 'anonymous@generic.com',
  password: 'genericistaan',
};

async function globalIdConverter(globalId) {
  const { type } = fromGlobalId(globalId);
  if (type === 'User') {
    return GENERIC_USER;
  }
  return null;
}

const { nodeInterface, nodeField } = nodeDefinitions(
  globalIdConverter,
  () => UserType,
);

// eslint-disable-next-line no-underscore-dangle
UserType._typeConfig.interfaces = [nodeInterface];

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    viewer: {
      type: UserType,
      args: {
        userId: {
          type: GraphQLString,
        },
        name: {
          type: GraphQLString,
        },
      },
      resolve: () => GENERIC_USER,
    },
  }),
});

const schema = new GraphQLSchema({
  query: queryType,
});

export default schema;
