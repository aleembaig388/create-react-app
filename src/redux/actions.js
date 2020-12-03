import * as actions from "../redux/actionType";
export const AddBug = (Description) => ({
  type: actions.BUG_ADDED,
  payload: { description: "Bug1" },
});
