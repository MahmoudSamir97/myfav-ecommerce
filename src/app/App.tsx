import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import '@/shared/styles/tailwind.css';

function App() {
  const { t } = useTranslation();
  useEffect(() => {
    toast.success('hello');
  }, []);
  return (
    <>
      <p>{t('welcome')}</p>
      <p className=" my-5"> {t('email', { ns: 'validation' })}</p>

      <h1 className="text-red-500 text-xl">Hello enterprise</h1>
    </>
  );
}

export default App;
