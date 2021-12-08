import React from 'react';
import { ChatMain, ContactZone, TagsImages, ExplicationZone } from './sections';
import './IndexPage.css';

const IndexPage = () => {
  return (
    <div className="index-page">
      <ExplicationZone />
      <TagsImages />
      <ChatMain />
      <ContactZone />
    </div>
  );
};

export default IndexPage;
