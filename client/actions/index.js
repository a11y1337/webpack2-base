import * as types from '../constants/actionTypes';

export const onInit = () => ({
  type: types.ON_INIT
});

export const filterEvents = () => ({
  type: types.FILTER_EVENTS
});

export const removeEvent = id => ({
  type: types.REMOVE_EVENT,
  id
});
