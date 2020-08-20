import React from 'react';
import { GetStaticProps } from 'next';
import matter from 'gray-matter';

const PostTemplate: GetStaticProps = ({ slug }) => (
  <div>Here we'll load "{slug}"</div>
);

export default PostTemplate;

PostTemplate.getStaticProps = async context => {
  const { slug } = context.query;

  // Import our .md file using the `slug` from the URL
  const content = await import(`../../content/${slug}.md`);

  // Parse .md data through `matter`
  const data = matter(content.default);

  return { ...data };
};
