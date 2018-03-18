import state from "./state";

class ChatGroup {
    constructor(id, users) {
        this.id = id;
        this.users = users;
    }

    getMessages(){
        return state.messages.filter(message => message.chatGroup === this.id);
    }
}

export default ChatGroup;