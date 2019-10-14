import ACTIONS from "./action";
import _ from "lodash";

let items: any[] = []

const defaultState = {
  items: items
};

const todoReducer = (state = defaultState, action: any) => {

  console.log('todoReducer', state, action)

  switch (action.type) {

    case ACTIONS.Types.CREATE_ITEM: {
      console.log('CREATE_ITEM', action);
      console.log('state', state);
      debugger

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      console.log('defaultState')
      return state;
  }
};

export default todoReducer;
