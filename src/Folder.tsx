import * as React from 'react';
import FolderIcon from './icons/FolderIcon.js';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-content: center;

  svg {
    padding-right: 12px;
    width: 30px;
  }
`;

const Text = styled.span`
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

type TreeProps = { text: String; children: any };

const Folder = ({ text, children }: TreeProps) => {
  return (
    <Wrapper>
      <FolderIcon />
      <Text>{text}</Text>
      <div>{children}</div>
    </Wrapper>
  );
};

export default Folder;
