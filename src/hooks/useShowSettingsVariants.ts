import { useCallback, useState } from 'react';
import { Languages } from '../constants/languages';

export const useShowSettingsVariants = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(Languages.English);

  const onSelectLanguage = useCallback((value: Languages) => {    
    setSelectedLanguage(value);
  }, [selectedLanguage, setSelectedLanguage]);

  return {
    selectedLanguage,
    onSelectLanguage,
  };
};
