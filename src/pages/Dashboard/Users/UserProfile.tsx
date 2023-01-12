import { useParams } from 'react-router-dom';
import stylesModule from '../../styles/Users.module.scss';

function UserProfile() {
  const { userID } = useParams();
  return (
    <div className={`${stylesModule.UserData}`}>
      La informacion del usuario: {userID}
    </div>
  );
}

export default UserProfile;
