import moment from "moment";
import state from "./state";

class Message {
    constructor(user, chatGroup, message, timestamp) {
        this.user = user;
        this.chatGroup = chatGroup;
        this.message = message;
        this.timestamp = moment(timestamp);
    }

    getResponseTime(){
        const previousMessage = this.getPreviousMessage();

        if (previousMessage && previousMessage.user !== this.user) {
            return moment(this.timestamp).diff(previousMessage.timestamp) / 1000 / 60;
        } else {
            return 0;
        }
    }

    getPreviousMessage(){
        const messagesByChatGroup = state.messages.filter(message => message.chatGroup === this.chatGroup);
        return messagesByChatGroup[messagesByChatGroup.indexOf(this)-1];
    }
}

export default Message;