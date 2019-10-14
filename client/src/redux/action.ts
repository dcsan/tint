// types of action
const Types = {
  CREATE_ITEM: "CREATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM"
};
// actions
const createItem = (task: any) => ({
  type: Types.CREATE_ITEM,
  payload: task
});

const deleteItem = (id: string) => ({
  type: Types.DELETE_ITEM,
  payload: id
});

export default {
  createItem,
  deleteItem,
  Types
};