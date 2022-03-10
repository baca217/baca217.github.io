import React from 'react';
import { DiFirebase, DiReact, DiZend, DiAngularSimple } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider></SectionDivider>
    <br></br>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world. 
      From Back-End architecture to Front-End application development.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" style={{float: "left"}}></DiReact>
        {/*
        TODO: getting this to align correctly with other symbol
        <DiAngularSimple size="3rem" style={{float: "left"}}></DiAngularSimple>
        */}
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with
            React.js and Angular Framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with
            Node.js and Microsoft SQL Server
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"></DiZend>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with design
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
