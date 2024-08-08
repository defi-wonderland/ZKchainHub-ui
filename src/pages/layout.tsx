import { Box, CssBaseline, styled } from '@mui/material';

import { Footer, Header } from '~/containers';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />

      <MainContent>
        <NoScriptMessage>
          <p>This website requires JavaScript to function properly.</p>
        </NoScriptMessage>

        <Header />
        {children}
        <Footer />
      </MainContent>
    </>
  );
}

const MainContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  min-height: 100%;
  margin: 0 auto;
`;

const NoScriptMessage = styled('noscript')(() => {
  return {
    margin: '0 auto',
    width: '100%',
    textAlign: 'center',
    fontSize: '1.6rem',
    padding: '1rem 0',
    p: {
      padding: '1rem 0',
      margin: 0,
    },
  };
});
