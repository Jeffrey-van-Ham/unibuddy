import moment from "moment";

class State {
    constructor(){
        this.users = [];
        this.messages = [];
        this.chatGroups = [];
    }

    addUser(user){
        this.users.push(user);
    }

    addMessage(message){
        this.messages.push(message);
        this.messages.sort((a, b) => moment(a.timestamp).isAfter(b.timestamp) ? 1 : moment(a.timestamp).isBefore(b.timestamp) ? -1 : 0);
    }

    addChatGroup(chatGroup){
        this.chatGroups.push(chatGroup);
    }

    getUsersByRoleAndUniversity(role, university){
        return this.users.filter(user => user.role === role && user.university === university)
    }

    getAverageResponseTimeByRoleAndUniversity(role, university){
        const users = this.getUsersByRoleAndUniversity(role, university);
        const messages = users.map(user => user.getMessages()).reduce((a, b) => a.concat(b));
        const responseTimes = messages.map(message => message.getResponseTime(message));

        return responseTimes.reduce((a, b) => a + b) / responseTimes.length;
    }
}

export default new State();