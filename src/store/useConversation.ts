import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface Message {
  id: string;
  user: boolean;
  text: string;
}
export interface Conversation {
  message: Message[];
  addMessage: (message: Message) => Message;
  removeMessage: (message: Message) => Message;
  getMessages: () => Message[];
  findMessage: (idx: number) => Message;
  findMessagesByUser: () => Message[];
}

export const useConversationSlice: StateCreator<Conversation> = (
  _set,
  _get
) => ({
  message: [],
  addMessage: (message) =>{
    _set((state)=>({
      ...state,
      message:[...state.message,message]
    }))
    return message
  },
  getMessages: () => _get().message,
  findMessage: (idx) => _get().message[idx],
  findMessagesByUser: () => _get().message,
  removeMessage: (message) => message,
});
