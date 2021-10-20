import ProfileTag from "../element-components/ProfileTag";

function ProfilePage({ currentUser, users }) {
  return (
    <div>
      <ProfileTag currentUser={currentUser} users={users} />
    </div>
  );
}

export default ProfilePage;
