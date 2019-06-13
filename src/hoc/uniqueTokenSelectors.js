import { filter } from 'lodash';
import { createSelector } from 'reselect';

const uniqueTokensSelector = state => state.uniqueTokens;

const sendableUniqueTokens = (uniqueTokens) => {
  return {
    sendableUniqueTokens: filter(uniqueTokens, ['isSendable', true]),
  };
};

export const sendableUniqueTokensSelector = createSelector(
  [ uniqueTokensSelector ],
  sendableUniqueTokens
);
