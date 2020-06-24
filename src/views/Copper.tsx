import Layout from '../components/Layout';
import styled from 'styled-components';
import React, {useState} from 'react';
import {CategorySection} from './Copper/CategorySection';
import {NoteSection} from './Copper/NoteSection';
import {NumberPadSection} from './Copper/NumberPadSection';
import {TagsSection} from './Copper/TagsSection';

type Category = '-' | '+'


function Copper() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={() => {}}
      />
    </MyLayout>);
}

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

export default Copper;