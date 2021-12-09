import React from 'react';
import { ChatMain, ContactZone, TagsImages, ExplicationZone } from './sections';
import './IndexPage.css';

const IndexPage = () => {
  return (
    <div className="index-page">
      <div className="init-chat">
        <ExplicationZone />
        <ChatMain />
      </div>
      <TagsImages />
      <ContactZone />
    </div>
  );
};

export default IndexPage;
