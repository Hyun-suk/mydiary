import React from 'react';
import styled from 'styled-components';

const I = styled.i.attrs({
  style: ({ size }) => ({ fontSize: size}),
})`
  width: 1em;
  text-align: center;
`;

const Icon = ({ name, ...rest }) => (
  <I className={`fa fa-${name}`} aria-hidden="true" {...rest} />
);

export default Icon;
