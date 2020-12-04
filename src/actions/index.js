import * as a from '../actions/ActionTypes'

export const deleteKeg = (id) => ({
  type: a.DELETE_KEG,
  id: id
});

export const toggleForm = () => ({
  type: a.TOGGLE_FORM
});
export const editing = () => ({
  type: a.EDITING
});

export const unselectKeg = () => ({
  type: a.UNSELECT_KEG
})

export const selectKeg = (keg) => {
  return {
    type: a.SELECT_KEG,
    keg: keg
  }
};

export const addTicket = (keg) => {
  const { name, brand, flavor, id, price, quantity } = keg;
  return {
    type: a.ADD_KEG,
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      quantity: quantity,
      id: id,
  }
}