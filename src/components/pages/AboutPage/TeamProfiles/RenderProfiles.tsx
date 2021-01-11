import React from 'react';
import { teamProfiles } from '../../../../data';
import ProfileCard from './ProfileCard';

const RenderProfiles = (): React.ReactElement => {
  return (
    <div className="profile-container content-wrapper">
      {teamProfiles.map((profile) => (
        <ProfileCard key={profile.name} profile={profile} />
      ))}
    </div>
  );
};

export default RenderProfiles;
