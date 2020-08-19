import Head from 'next/head';
import styled from '@emotion/styled';
import { NextPage } from 'next';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: column;
  align-items: center;
`;

const BlogTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

const title: string = 'Next.js + TypeScript';

interface Props {
  blogCategory: string;
}

const Home: NextPage<Props> = ({ blogCategory }) => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <BlogTitle>{title}</BlogTitle>
        <div>My blog about {blogCategory}</div>
      </Main>
    </Container>
  );
};

export default Home;

Home.getInitialProps = () => {
  return {
    blogCategory: 'Books',
  };
};
