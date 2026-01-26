import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnnouncementIcon, CloseIcon } from '@/shared/assets/index';
import { LinkButton } from '@/shared/ui';
import { cn } from '@/shared/lib/utils';

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();

  if (!isVisible) return null;

  return (
    <div className="bg-surface-soft py-2 px-5 text-announcement">
      <div className="md:justify-between justify-center gap-3 md:gap0 flex items-center">
        {/* 1. Left Spacer (Empty but takes up space) */}
        <div className="flex-1 block" />

        {/* 2. Center Content (Centered within its flex-1 area) */}
        <div className={cn('flex items-center justify-center gap-2 md:gap-3')}>
          <AnnouncementIcon className="shrink-0" />
          <p className="font-medium text-sm">{t('announcement.text')}</p>
          <LinkButton to="/shop" withArrow className="hidden md:flex shrink-0">
            {t('announcement.button')}
          </LinkButton>
        </div>

        {/* 3. Right Action (Aligned to the end of its flex-1 area) */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer "
            aria-label="Close announcement"
          >
            <CloseIcon className="md:w-3.5 md:h-3.5 w-3 h-3 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
};
