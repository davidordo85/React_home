import React from 'react';
import Layout from '../layout/Layout';
import { ChatMain, TagsImages, ExplicationZone } from './sections';
import './IndexPage.css';

const IndexPage = ({ isLogged }) => {
  return (
    <Layout isLogged={isLogged}>
      <div className="index-page">
        <ExplicationZone />
        <TagsImages />
        <ChatMain />
      </div>
    </Layout>
  );
};

export default IndexPage;
