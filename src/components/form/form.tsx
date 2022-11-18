import React, { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { FriendListContext } from "../../contexts/friend-list/friend-list";

const Form = () => {
  const [name, setName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { friendList, setFriendList } = useContext(FriendListContext);

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFriendList([...friendList, name]);
    setName('');
    inputRef.current?.focus();
  }

  useEffect(() => {console.log('friendList', friendList)}, [friendList])

  return (
    <form onSubmit={addParticipant}>
      <input type="text" ref={inputRef} value={name} onChange={event => setName(event.target.value)} placeholder="Insira os nomes dos participantes" />
      <button disabled={!name}>Adicionar</button>
    </form>
  );
};

export default Form;
