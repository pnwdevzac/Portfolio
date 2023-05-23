import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        The 2023 
        Hoot N Holler!

      </SectionTitle>
      <SectionText>
        Insert radical mantra, intro section here.
        
        </SectionText>

    </LeftSection>
  </Section>
);

export default Hero;