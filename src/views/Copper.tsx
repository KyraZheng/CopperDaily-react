import Layout from '../components/Layout';
import styled from 'styled-components';
import React, {useState} from 'react';
import {CategorySection} from './Copper/CategorySection';
import {NoteSection} from './Copper/NoteSection';
import {NumberPadSection} from './Copper/NumberPadSection';
import {TagsSection} from './Copper/TagsSection';
import {useRecords} from '../hooks/useRecords';

type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Copper() {
  const [selected, setSelected] = useState(defaultFormData
  );
  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };

  const submit = () => {
    if (addRecord(selected)) {
      alert('提交成功');
      window.location.reload();
    }
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
                        onOk={submit}
      />
    </MyLayout>);
}


export default Copper;