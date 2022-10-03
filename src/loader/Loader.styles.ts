import styled from 'styled-components';

export const PageLoaderContainer = styled.div({
  margin: 'auto',
  textAlign: 'center',
  height: '94vh',
  position: 'relative',
});

export const PageLoader = styled.div({
  position: 'relative',
  width: 80,
  height: 80,
  top: '45%',
  left: '45%',
  '@media all and (max-width: 400px)': {
    top: '40%',
    left: '40%',
  },
  '#fcp': {
    opacity: 0.01,
  },
  div: {
    display: 'inline-block',
    position: 'absolute',
    left: 8,
    width: 16,
    background: '#8456EC',
    animation: 'page-loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite',
    ':nth-child(1)': {
      left: 8,
      animationDelay: '-0.24s',
    },
    ':nth-child(2)': {
      left: 32,
      animationDelay: '-0.12s',
    },
    ':nth-child(3)': {
      left: 56,
      animationDelay: '0',
    },
    '@keyframes': {
      '0%': {
        top: 8,
        height: 64,
      },
      '50%, 100%': {
        top: 24,
        height: 32,
      },
    },
  },
});
