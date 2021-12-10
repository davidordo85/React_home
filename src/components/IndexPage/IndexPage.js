import React from 'react';
import Layout from '../layout/Layout';
import { ChatMain, ContactZone, TagsImages, ExplicationZone } from './sections';
import './IndexPage.css';

const IndexPage = () => {
  return (
    <Layout>
      <div className="index-page">
        <div className="init-chat">
          <ExplicationZone />
          <ChatMain />
        </div>
        <TagsImages />
        <ContactZone />
      </div>
    </Layout>
  );
};

export default IndexPage;
