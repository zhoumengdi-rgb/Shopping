export default (state = {username:'',age:10},action) =>{
    switch (action.type){
        case 'SENT_NAME':
            state.username = action.name;
            return {...state};
        case 'AGE':
            state.age = action.age
            return {...state}
        default:
            return state
    }
}