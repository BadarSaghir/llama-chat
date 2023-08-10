// Create a chat area component that will display the messages from the database.
// 

import { ChatButton } from "@/components/client/ChatButton"
import { StoreInitializer } from "@/components/client/StoreInitializer"
import store from "@/store/store"
export function ChatArea() {
  // store.setState({ message: [{ id: "s", text: "s", user: false }] })
  return (
    <div>
      <StoreInitializer value={
        {
          message: [
            {
              id: "",
              text: "",
              user: false
            }
          ]
        }} />

      <h1 className="">Chat Area</h1>
      {/* {JSON.stringify(store.getState().message)} */}
      {/* <ChatButton >{store.getState().message.length}</ChatButton> */}
    </div>
  )
}