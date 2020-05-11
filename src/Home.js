import React from 'react';
import styled from 'styled-components';

import  profilePic from '../src/img/pinkprofile.png';

const Container = styled.div`
  padding: 90px;
  background-color: #eee;
  flex: 6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Profile = styled.img`
  width: 350px;
  margin-bottom: 20px;
`
const Section= styled.div`
  text-align: center;
  margin-bottom: 80px;
`
const Hi = styled.p`
`
const Text = styled.p`
  font-weight: 500;
`
const Name = styled.h1`
  color: #720171;
`
const Emoji = styled.i`
  font-size: 30px;
`
const Jump = styled.span`
  display: initial;
`

const Home = () => {
    return (
      <Container>
        <Profile src={profilePic} alt="My face"></Profile>
          <Section>
            <Hi>
              <span role="img" aria-label="hi hand"><Emoji >&#128075;&#127997; </Emoji></span>
              Hi there! My name is
            </Hi>
            <Name>Marina Luxin</Name>
            <Text>I am software developer based in Paris, France <Jump><br></br></Jump>focused on learning and building creatives applications</Text>
          </Section>
      </Container>
    )
}
export default Home