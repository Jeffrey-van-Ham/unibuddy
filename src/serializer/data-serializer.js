import state from "../models/state";
import User from "../models/user";
import Message from "../models/message";
import ChatGroup from "../models/chat-group";

export const processData = data => {
    const rows = data.split(/\n/);

    rows.forEach(row => processRow(row));
};

const processRow = row => {
    const columns = row.split("|");

    switch (columns[0]) {
        case "User":
            return state.addUser(processUser(columns));
        case "ChatGroup":
            return state.addChatGroup(processChatGroup(columns));
        case "Message":
            return state.addMessage(processMessage(columns));
        default:
            console.log("Unable to process");
    }
};

const processUser = user => {
    return new User(user[1], user[2], user[3]);
};

const processChatGroup = chatGroup => {
    return new ChatGroup(chatGroup[1], chatGroup.slice(2, chatGroup.length));
};

const processMessage = message => {
    return new Message(message[1], message[2], message[3], message[4]);
};