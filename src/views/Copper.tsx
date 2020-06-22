import Layout from '../components/Layout';
import styled from 'styled-components';
import React, {useState} from 'react';
import {CategorySection} from './Copper/CategorySection';
import {NotesSection} from './Copper/NotesSection';
import {NumberPadSection} from './Copper/NumberPadSection';
import {TagsSection} from './Copper/TagsSection';

type Category = '-' | '+'


function Copper() {
  const [selected, setSelected] = useState({
      tags: [] as string[],
      note: '',
      category: '-' as Category,
      amount: 0
    }
  );

  return (
    <MyLayout>
      <TagsSection value={selected.tags} onChange={(tags) => setSelected(
        {
          ...selected, tags: tags
        }
      )}/>
      <NotesSection value={selected.note}
                    onChange={(note) => {
                      setSelected({
                        ...selected, note: note
                      });
                    }}
      />
      <CategorySection value={selected.category}
                       onChange={(category) => {
                         setSelected({
                           ...selected, category: category
                         });
                       }}
      />
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => {
                          setSelected({
                            ...selected, amount: amount
                          });
                        }}
                        onOk={() => {}}
      />
    </MyLayout>);
}

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

export default Copper;