import { InfoBox } from '~/components';

interface InfoCardProps {
  title: string;
}

export const InfoCard = ({ title }: InfoCardProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>
        <InfoBox title='Website' description='https://www.example.com' />
      </div>
    </section>
  );
};
