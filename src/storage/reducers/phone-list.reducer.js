import { ADD_PHONE_ITEM, DELETE_PHONE_ITEM, EDITE_PHONE_ITEM } from '../actions/phone-list.actions';

const initialState = {
  incrementKey: 0,
  items: [{
    key: 0,
    phoneNumber: '',
    name: '',
    company: '',
    email: '',
    photo: ''
  }]
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PHONE_ITEM: {
      const newKey = state.incrementKey + 1;
      const newItems = [...state.items];

      newItems.push({
        key: newKey,
        ...payload
      });

      return {
        incrementKey: newKey,
        items: newItems
      };
    }
    case DELETE_PHONE_ITEM: {
      const index = state.items.findIndex((item) => item.key === payload.key);

      if (index === -1) {
        return state;
      }

      const newItems = [...state.items];

      newItems.splice(index, 1);

      return {
        ...state,
        items: newItems
      };
    }
    case EDITE_PHONE_ITEM: {
      return state;
    }
    default:
      return state;
  }
};