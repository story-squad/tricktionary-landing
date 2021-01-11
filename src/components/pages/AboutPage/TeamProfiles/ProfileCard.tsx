import React from 'react';
import { TeamProfileItem } from '../../../../data/teamProfiles/teamProfilesTypes';

const ProfileCard = (props: {
  profile: TeamProfileItem;
}): React.ReactElement => {
  const { profile } = props;
  return (
    <div className="profile-card">
      <div className="profile-info">
        <h3>{profile.name}</h3>
        <p>{profile.role}</p>
        <p>{profile.bio}</p>
      </div>
      <div className="profile-img-wrapper">
        <img src={profile.photo} alt={`photo of ${profile.name}`} />
      </div>
    </div>
  );
};

export default ProfileCard;
