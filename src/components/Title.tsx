interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <>
      <h2> {title}</h2>
    </>
  );
};
