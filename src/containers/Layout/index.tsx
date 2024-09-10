import { ReactNode, FunctionComponent } from 'react';
import { Box } from '@mui/material';

import { Header, Footer } from '~/containers';
interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FunctionComponent<AppLayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export { AppLayout };
