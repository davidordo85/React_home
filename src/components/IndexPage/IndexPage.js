import React from 'react';
import { ChatMain, ContactZone, TagsImages, ExplicationZone } from './sections';

const IndexPage = () => {
  return (
    <div>
      <ExplicationZone />
      <TagsImages />
      <ChatMain />
      <ContactZone />
    </div>
  );
};

export default IndexPage;
