'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let newState = { ...state };

  return actions.map(action => {
    switch (action.type) {
      case 'addProperties':
        Object.assign(newState, action.extraData);

        return { ...newState };

      case 'removeProperties':
        action.keysToRemove.forEach(key => delete newState[key]);

        return { ...newState };

      case 'clear':
        newState = {};

        return { ...newState };

      default:
        return { ...newState };
    }
  });
}

module.exports = transformStateWithClones;
