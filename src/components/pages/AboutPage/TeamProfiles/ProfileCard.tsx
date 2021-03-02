import React from 'react';
import { TeamProfileItem } from '../../../../data/teamProfiles/teamProfilesTypes';

const ProfileCard = (props: {
  profile: TeamProfileItem;
}): React.ReactElement => {
  const { profile } = props;
  return (
    <div className="profile-card">
      <div className="profile-img-wrapper">
        <img src={profile.photo} alt={`photo of ${profile.name}`} />
      </div>
      <div className="profile-name-role">
        <h3>{profile.name}</h3>
        <p>
          <strong>{profile.role}</strong>
        </p>
        <p>Favorite Definition: {profile.faveDef}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
