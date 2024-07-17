import { useTranslation } from 'next-i18next';

export const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <form>
      <input type='text' placeholder={t('HOME.DASHBOARD.search')} />
    </form>
  );
};
