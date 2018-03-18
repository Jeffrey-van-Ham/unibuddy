import state from "./state";

class User {
    constructor(name, university, role){
        this.name = name;
        this.university = university;
        this.role = role;
    }

    getMessages(){
        return state.messages.filter(message => message.user === this.name);
    }
}

export default User;