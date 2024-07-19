import { useTranslation } from 'next-i18next';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <form>
      <input type='text' value={value} onChange={handleChange} placeholder={t('HOME.DASHBOARD.search')} />
    </form>
  );
};
