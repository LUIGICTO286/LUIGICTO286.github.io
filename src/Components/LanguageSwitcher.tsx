import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from './Modal';
import { LockIcon } from './Icons'; // Assuming you have a LockIcon component

interface LanguageSwitcherProps {
  onLanguageChange?: (language: string) => void;
}

const languageOptions = [
  { code: 'en', label: 'English', flag: '/Locales/SVG/us.svg' },
  { code: 'cn', label: '中文', flag: '/Locales/SVG/cn.svg', locked: true },
  { code: 'it', label: 'Italiano', flag: '/Locales/SVG/it.svg', locked: true },
  { code: 'de', label: 'Deutsch', flag: '/Locales/SVG/de.svg', locked: true },
  { code: 'ru', label: 'Русский', flag: '/Locales/SVG/ru.svg', locked: true },
  { code: 'ae', label: 'العربية', flag: '/Locales/SVG/ae.svg', locked: true },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    languageOptions.find((lang) => lang.code === i18n.language) || languageOptions[0]
  );

  const changeLanguage = (language: (typeof languageOptions)[0]) => {
    if (language.locked) return;
    i18n.changeLanguage(language.code);
    setCurrentLanguage(language);
    setIsModalOpen(false);
    if (onLanguageChange) onLanguageChange(language.code);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center justify-center rounded-full border-2 border-white"
        style={{
          textShadow: isHovered ? '0 0 1px #FFF, 0 0 1px #FFF, 0 0 1px #FFF' : 'none',
          transform: isHovered ? 'scale(1.25)' : 'scale(1)',
          transition: 'transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
        }}
      >
        <img src={currentLanguage.flag} alt={currentLanguage.label} className="h-6 w-6 rounded-full" />
      </button>

      <Modal isOpen={isModalOpen} title="Select Language" onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col space-y-4">
          {languageOptions.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language)}
              disabled={language.locked} // Disable the button if locked
              className={`relative flex items-center rounded px-4 py-2 ${
                language.locked ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <img src={language.flag} alt={language.label} className="mr-2 h-6 w-6" />
              {language.label}
              {language.locked && (
                <LockIcon
                  width={20}
                  height={20}
                  className="ml-2 text-gray-500"
                />
              )}
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
};
