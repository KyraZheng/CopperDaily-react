import Layout from '../components/Layout';
import styled from 'styled-components';
import React from 'react';
import {CategorySection} from './Copper/CategorySection';
import {NotesSection} from './Copper/NotesSection';
import {NumberPadSection} from './Copper/NumberPadSection';
import {TagsSection} from './Copper/TagsSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`


function Copper() {
  return (
    <MyLayout>
      <TagsSection />
      <NotesSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>);
}

export default Copper;