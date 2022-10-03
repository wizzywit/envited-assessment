import React from 'react';
import * as StyledComponents from './Loader.styles';

const Loader = () => {
  return (
    <StyledComponents.PageLoaderContainer>
      <StyledComponents.PageLoader>
        <div />
        <div />
        <div />
        <div id="fcp">Envited</div>
      </StyledComponents.PageLoader>
    </StyledComponents.PageLoaderContainer>
  );
};

export default Loader;
