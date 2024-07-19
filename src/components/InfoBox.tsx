interface InfoBoxProps {
  title: string;
  description: string;
}

export const InfoBox = ({ title, description }: InfoBoxProps) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};
