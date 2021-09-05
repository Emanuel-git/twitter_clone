import React from 'react';

import Feed from '../Feed';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>
          
          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>
              <h1>José Emanuel</h1>
              <h2>@emanuel</h2>

              <p>
                  programming student, my github: <a href="https://github.com/Emanuel-git">Emanuel-git</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Somewhere, Milky Way
                  </li>
                  <li>
                      <CakeIcon />
                      Born mmmmmmmm dd, yyyy
                  </li>
              </ul>

              <Followage>
                  <span>
                      following <strong>100</strong>
                  </span>
                  <span>
                      <strong>100 </strong> followers
                  </span>
              </Followage>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;