import { useState } from 'react';
import { CloseIcon } from '@/shared/assets/index';
import { useTranslation } from 'react-i18next';
import { LinkButton } from '@/shared/ui';

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();

  if (!isVisible) return null;

  return (
    <div className="bg-surface-soft py-3 px-4 text-announcement">
      <div className="container mx-auto flex items-center justify-between">
        {/* Spacer for centering logic */}
        <div className="w-6 hidden md:block" />

        <p className="text-body-xs md:text-body-sm font-medium  grow">{t('announcement.text')}</p>

        <LinkButton to="/shop" withArrow className="ml-2 hidden md:inline">
          {t('announcement.button')}
        </LinkButton>

        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          aria-label="Close announcement"
        >
          <CloseIcon className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
