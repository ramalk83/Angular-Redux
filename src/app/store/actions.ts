export enum ActionTypes{
    Add = 'Add to cart',
    Remove = 'Remove from cart',
    LoadItems = 'Load items',
    LoadSuccess = 'Load success'
}

export const AddToCart = payload => {
    return {
      type: ActionTypes.Add,
      payload
    };
  };
  export const GetItems = () => ({
    type: ActionTypes.LoadItems
  });
  export const RemoveFromCart = payload => ({
    type: ActionTypes.Remove,
    payload
  });
  export const LoadItems = payload => ({
    type: ActionTypes.LoadSuccess,
    payload
  });