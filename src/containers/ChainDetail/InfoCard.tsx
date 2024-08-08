import { InfoBox } from '~/components';

import BlockDark from '~/assets/icons/blockDark.svg';
import BlockLight from '~/assets/icons/blockLight.svg';

interface InfoCardProps {
  title: string;
}

export const InfoCard = ({ title }: InfoCardProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>
        <InfoBox
          title='Website'
          description='https://www.example.com'
          darkIcon={BlockDark}
          lightIcon={BlockLight}
          size={20}
          alt='block'
        />
      </div>
    </section>
  );
};
