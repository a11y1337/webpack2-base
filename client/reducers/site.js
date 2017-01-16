import objectAssign from 'object-assign';
import { ON_INIT, FILTER_EVENTS, REMOVE_EVENT } from '../constants/actionTypes';
import initialState from '../data/siteData';

export default function siteDataReducer(state = initialState, action) {
  let newEvents = [];
  let eventId;
  switch (action.type) {
    case ON_INIT:
      return objectAssign({}, state);
    case FILTER_EVENTS:
      newEvents = state && state.events.filter(event =>
        Date.parse(event.date) > Date.now()
      );
      return objectAssign({}, state, { events: newEvents });
    case REMOVE_EVENT:
      eventId = action.id;
      newEvents = state.events.filter(event => event.id !== eventId);
      return objectAssign({}, state, { events: newEvents });
    default:
      return state;
  }
}
