import { useLanguage } from '../contexts/LanguageContext';
import { es } from '../translations/es';
import { en } from '../translations/en';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const translations = language === 'es' ? es : en;
  
  return translations;
};
