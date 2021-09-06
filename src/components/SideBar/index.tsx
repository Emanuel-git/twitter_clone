import React from 'react';
import StickyBox from 'react-sticky-box';

import News from '../News';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
} from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Search on Twitter" />
              <SearchIcon />
          </SearchWrapper>

          <StickyBox>
          <Body>
              <List
                title="Maybe you like"
                elements={[
                    <FollowSuggestion
                        name="Bon Iver"
                        nickname="@boniver"
                    />,
                    <FollowSuggestion
                        name="Hayley from Paramore"
                        nickname="@yelyahwillians"
                    />,
                    <FollowSuggestion
                        name="Elon Musk"
                        nickname="@elonmusk"
                    />
                ]}
              />

              <List
                title="What's going on"
                elements={[
                    <News />,
                    <News />,
                    <News />
                ]}
              />
                            <List
                title="What's going on"
                elements={[
                    <News />,
                    <News />,
                    <News />
                ]}
              />
              <List
                title="What's going on"
                elements={[
                    <News />,
                    <News />,
                    <News />
                ]}
              />
          </Body>
          </StickyBox>
      </Container>
  );
}

export default SideBar;