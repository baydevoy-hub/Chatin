// types.ts

export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Message {
    id: string;
    content: string;
    senderId: string;
    channelId: string;
    timestamp: Date;
}

export interface Channel {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Category {
    id: string;
    name: string;
    channelIds: string[];
}

export interface Server {
    id: string;
    name: string;
    ownerId: string;
    channelIds: string[];
}

export interface ViewState {
    currentChannelId: string;
    currentUserId: string;
    isModalOpen: boolean;
}