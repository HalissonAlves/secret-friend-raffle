import React, { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { FriendListContext } from "../../contexts/friend-list/friend-list";

const Form = () => {
  const [name, setName] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { friendList, setFriendList } = useContext(FriendListContext);

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!friendList.includes(name)) {
      setFriendList([...friendList, name]);
    } else {
      setErrorMessage('Duplicated participants are not allowed');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000)
    }
    setName('');
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={addParticipant}>
      <input type="text" ref={inputRef} value={name} onChange={event => setName(event.target.value)} placeholder="Insira os nomes dos participantes" />
      <button disabled={!name}>Adicionar</button>
      {errorMessage && 
        <p role="alert">{errorMessage}</p>
      }
    </form>
  );
};

export default Form;
