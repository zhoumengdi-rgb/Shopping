export default (state="",action)=>{
    switch(action.type){
        case "ITEM_NAME":
            state = action.name;
            return state;
        default:
            return state;
    }
}