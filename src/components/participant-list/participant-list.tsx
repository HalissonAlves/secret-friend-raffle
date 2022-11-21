import { useContext } from "react";
import { FriendListContext } from "../../contexts/friend-list/friend-list";

const ParticipantList = () => {
  const { friendList } = useContext(FriendListContext);

  return (
    <ul>
      {friendList.map((friend) => (
        <li key={friend}>{friend}</li>
      ))}
    </ul>
  );
};

export default ParticipantList;
