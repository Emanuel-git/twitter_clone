import React from 'react';

import Button from '../Button';

import { 
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    ExitIcon,
    Botside,
    Avatar,
    ProfileData
} from './styles';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <Topside>
              <Logo />

              <MenuButton>
                  <HomeIcon />
                  <span>Home</span>
              </MenuButton>

              <MenuButton>
                  <BellIcon />
                  <span>Notifications</span>
              </MenuButton>

              <MenuButton>
                  <EmailIcon />
                  <span>Messages</span>
              </MenuButton>

              <MenuButton>
                  <FavoriteIcon />
                  <span>Favorites</span>
              </MenuButton>

              <MenuButton className="active">
                  <ProfileIcon/>
                  <span>Profile</span>
              </MenuButton>

              <Button>
                  <span>Tweet</span>
              </Button>

          </Topside>

          <Botside>
              <Avatar />

              <ProfileData>
                  <strong>José Emanuel</strong>
                  <strong>@emanuel</strong>
              </ProfileData>

              <ExitIcon />
          </Botside>
      </Container>
  );
}

export default MenuBar;