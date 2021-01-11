import React from 'react';
import { TeamProfileItem } from '../../../../data/teamProfiles/teamProfilesTypes';

const ProfileCard = (props: TeamProfileItem): React.ReactElement => {
  return (
    <div className="profile-card">
      <div className="profile-info">
        <h3>{props.name}</h3>
        <p>{props.role}</p>
        <p>{props.bio}</p>
      </div>
      <div className="profile-img-wrapper">
        <img src={props.photo} alt={`photo of ${props.name}`} />
      </div>
    </div>
  );
};

export default ProfileCard;
