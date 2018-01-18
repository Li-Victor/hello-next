import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Layout from '../components/MyLayout';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a href={`/post?title=${props.title}`}>{props.title}</a>
    </Link>
  </li>
);

PostLink.propTypes = {
  title: PropTypes.string.isRequired
};

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);
