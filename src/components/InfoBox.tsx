interface InfoBoxProps {
  title: string;
  description: string | number;
}

export const InfoBox = ({ title, description }: InfoBoxProps) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};
