import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { useConversationSlice } from "./useConversation";
import { immer } from "zustand/middleware/immer";
//import React from "react";
export const useStore = create(
  devtools(
    immer<ReturnType<typeof useConversationSlice>>((...a) => ({
      ...useConversationSlice(...a),
    }))
  )
);

// export const useStore = create<ReturnType<typeof useConversationSlice>>((...a)=>(
//   // ...useConversationSlice(...a)

// ))
export default useStore;
