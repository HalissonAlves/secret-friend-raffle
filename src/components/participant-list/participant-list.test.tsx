import { render, screen } from "@testing-library/react";
import { createContext } from "react";
import {
  FriendListContext,
  FriendListProvider,
} from "../../contexts/friend-list/friend-list";
import ParticipantList from "./participant-list";

function renderFriendList(friendList: string[] | []) {
    return render(
      <FriendListContext.Provider value={{friendList, setFriendList: jest.fn()}}>
        <ParticipantList />
      </FriendListContext.Provider>
    );
  }

describe("Participant list test", () => {

  it("should return an empty list", () => {
    renderFriendList([]);

    const friends = screen.queryAllByRole("listitem");
    expect(friends).toHaveLength(0);
  });

  it("should return a populated list", () => {
    renderFriendList(['Halisson', 'Reinaldo']);
    
    const friends = screen.queryAllByRole("listitem");
    expect(friends).toHaveLength(2);
  });
});
