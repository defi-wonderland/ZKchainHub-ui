import { ReactNode, FunctionComponent } from 'react';
import { Box, styled } from '@mui/material';

import { Header, Footer } from '~/containers';
interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FunctionComponent<AppLayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Container>{children}</Container>

      <Footer />
    </>
  );
};

const Container = styled(Box)(() => {
  return {
    width: '85%',
  };
});

export { AppLayout };
