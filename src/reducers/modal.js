import { ADD_TO_FAV, DELETE_FAV } from  "../actions/actionTypes";


export default (
  state = {
    favStore: []
  },
  action//viene de action file
) => {
  switch(action.type){

    case ADD_TO_FAV:
      return {
        ...state,
        favStore: state.favStore.concat([action.payload])
      }
      case DELETE_FAV:
        console.log(action);

        return {
          ...state,
        favStore: state.favStore.filter((store) => store.name !== action.payload.name) 
        /* state.filter((post) => post.id !== action.id) */
        /* state.order.filter((order) => order.id !== action.id)*/
        
        }

    default: return state;//siempre poner default 
  }
}