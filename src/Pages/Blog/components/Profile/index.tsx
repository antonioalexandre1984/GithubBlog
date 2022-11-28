import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faCodePullRequest, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { ExternalLink } from '../../../../components/ExternalLink';
import { Spinner } from '../../../../components/Spinner';
import { api } from '../../../../lib/axios';
import { ProfileContainer, ProfilePicture, ProfileDetails } from './styles';

const userName = import.meta.env.VITE_GITHUB_USERNAME;

interface IProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export function Profile() {
  const [profileData, setProfileData] = useState<IProfileData>({} as IProfileData);
  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/users/${userName}`);
      console.log(response.data);
      setProfileData(response.data)
    } finally {
      setIsLoading(false);
    }
  }, [profileData]);

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <ProfileContainer className='container'>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProfilePicture src={`https://github.com/antonioalexandre1984.png`} alt="Avatar" />
          <ProfileDetails>
            <header>
              <h1>Antonio Alexandre</h1>
              <ExternalLink
                text='github'
                href={profileData.html_url}
                target='_blank'
              />
            </header>
            <p>
              {profileData.bio}
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profileData.login}
              </li>
              <li>
                <FontAwesomeIcon icon={faBuilding} />
                {profileData.company}
              </li>
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profileData.followers} seguidores</li>
            </ul>
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  );
}
