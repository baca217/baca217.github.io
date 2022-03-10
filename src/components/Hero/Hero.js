import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello my name is Elmer<br></br>
        Welcome To My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My skills focus on front-end development and application development
      </SectionText>
      {/*TODO: Make this your email link or just more about your projects up to you*/}
      <Button onClick={() => window.location = '/unimplemented'}>E-mail Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;