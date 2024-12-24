export type RoomData = {
    name: string;
    image: string;
};

export type ChatMessage = {
    sender: Sender;
    text: string;
};

export type Sender = {
    username: string;
    color: string;
};
