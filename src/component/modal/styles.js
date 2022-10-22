import { Heading } from '@adobe/react-spectrum';
import styled from 'styled-components';

export const H3 = styled.h3`
  text-align: left;
  font-size: 1.5rem;
  margin: 0;
  color: rgb(74, 74, 74);
`;
export const HeaderText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: grey;
  font-weight: 400;
  margin-bottom: 3em;
`;

export const H4 = styled.h4`
  font-size: 1rem;
  color: rgb(74, 74, 74);
  font-weight: bold;
  margin-bottom: 0rem;
  margin-top: 2.5rem;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  .bold {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.75rem;
    margin-bottom: 0.8em;
  }

  .box {
    border: 1px solid #b5b5b5;
    margin: 1rem 0;
    margin-top: 0rem;
  }
  .link {
    color: rgb(1, 115, 225);
    text-decoration: underline;
    font-size: 0.9rem;
    font-weight: 300;
    margin-left: auto;
  }
`;
