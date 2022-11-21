import { createContext, Dispatch, SetStateAction, useState } from "react"

type Props = {
  children: JSX.Element,
};

interface IFriendList {
  friendList: Array<string>,
  setFriendList: Dispatch<SetStateAction<Array<string>>>
}

const FriendListContext = createContext({} as IFriendList);

const FriendListProvider = ({ children }: Props) => {
  const [friendList, setFriendList] = useState<Array<string>>([]);

  return (
    <FriendListContext.Provider value={{friendList, setFriendList}}>
      {children}
    </FriendListContext.Provider>
  )
}

export {FriendListProvider, FriendListContext};