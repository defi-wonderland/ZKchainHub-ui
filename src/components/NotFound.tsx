interface NotFoundProps {
  text: string;
}

export const NotFound = ({ text }: NotFoundProps) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};
