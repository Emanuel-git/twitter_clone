import React from 'react';

import {
    Container,
    Retweeted,
    RetweetedIcon,
    RetweetIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RetweetedIcon />
              You retweeted
          </Retweeted>

          <Body>
              <Avatar />

              <Content>
                  <Header>
                      <strong>Taylor Swift</strong>
                      <span>@taylorswift13</span>
                      <Dot />
                      <time>22 nov 20</time>
                  </Header>

                  <Description>not a lot going on at the moment</Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          28,2K
                      </Status>
                      <Status>
                          <RetweetIcon />
                          92,5K
                      </Status>
                      <Status>
                          <LikeIcon />
                          458K
                      </Status>
                  </Icons>
              </Content>
          </Body>   
      </Container>
  );
}

export default Tweet;