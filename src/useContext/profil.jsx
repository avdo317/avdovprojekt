import React, { useContext } from 'react';
import { UserContext } from './userContext';
const Profile = () => {
  const user = useContext(UserContext);

  return <p>{user.name}</p>;
};
function Nesto() {

  const user = useContext(UserContext);
  user.name = 10;
  return <p>{user.name}</p>;
}

export { Profile, Nesto };

