import { useEffect, useState } from "react";

function ProfileTag({ currentUser, users }) {
  const [profileUser, setProfileUser] = useState({});

  useEffect(() => {
    const filterUser = users.filter((user) => {
      return user.username === currentUser;
    });
    setProfileUser(filterUser[0]);
  }, [currentUser, users]);

  return (
    <div>
      <p>{profileUser.username}</p>
      <p>{profileUser.name}</p>
      <img src={profileUser.avatar_url} alt="profile avatar"></img>
    </div>
  );
}

export default ProfileTag;
