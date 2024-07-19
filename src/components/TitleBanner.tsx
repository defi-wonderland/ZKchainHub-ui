import { useTranslation } from 'next-i18next';

export const TitleBanner = () => {
  const { t } = useTranslation();

  return (
    <div>
      <span>{t('HOME.title')}</span>

      <div>
        <span>{`${t('HOME.gasPrice')}: 10 wei ${t('HOME.transfer')} $10`}</span>
      </div>
    </div>
  );
};
