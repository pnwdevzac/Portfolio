import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio

      </SectionTitle>
      <SectionText>
        My purpose and goal is to constantly learn and improve upon my knowledge base as a developer and adapt to the rapidly changing world and tools being used.
        
        </SectionText>
        <Button onClick={() => window.location = 'https://nextjs.org/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;