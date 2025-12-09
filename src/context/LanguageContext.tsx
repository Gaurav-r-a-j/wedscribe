import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

// Basic dictionary for initial implementation
export const translations: Translations = {
  // Navigation / Common
  'nav.features': { en: 'Features', hi: 'विशेषताएँ' },
  'nav.templates': { en: 'Templates', hi: 'टेम्पलेट्स' },
  'nav.faq': { en: 'FAQ', hi: 'सामान्य प्रश्न' },
  'nav.create': { en: 'Create Now', hi: 'अभी बनाएँ' },
  'nav.login': { en: 'Login', hi: 'लॉग इन' },
  
  // Editor Headers
  'editor.back': { en: 'Back', hi: 'वापस' },
  'editor.reset': { en: 'Reset', hi: 'रीसेट' },
  'editor.print': { en: 'Print / PDF', hi: 'प्रिंट / पीडीएफ' },
  'editor.tab.templates': { en: 'Templates', hi: 'टेम्पलेट्स' },
  'editor.tab.edit': { en: 'Edit Biodata', hi: 'बायोडेटा संपादित करें' },
  
  // Personal Details
  'section.personal': { en: 'Personal Details', hi: 'व्यक्तिगत विवरण' },
  'field.name': { en: 'Full Name', hi: 'पूरा नाम' },
  'field.dob': { en: 'Date of Birth', hi: 'जन्म तिथि' },
  'field.tob': { en: 'Time of Birth', hi: 'जन्म समय' },
  'field.pob': { en: 'Place of Birth', hi: 'जन्म स्थान' },
  'field.height': { en: 'Height', hi: 'ऊंचाई' },
  'field.caste': { en: 'Caste / Community', hi: 'जाति / समुदाय' },
  'field.religion': { en: 'Religion', hi: 'धर्म' },
  'field.manglik': { en: 'Manglik Status', hi: 'मांगलिक स्थिति' },
  'field.photo': { en: 'Profile Photo', hi: 'प्रोफाइल फोटो' },

  // Education & Career
  'section.education': { en: 'Education & Career', hi: 'शिक्षा और करियर' },
  'field.education': { en: 'Education Qualification', hi: 'शैक्षिक योग्यता' },
  'field.occupation': { en: 'Occupation / Job', hi: 'व्यवसाय / नौकरी' },
  'field.income': { en: 'Annual Income', hi: 'वार्षिक आय' },
  'field.about': { en: 'About Me', hi: 'मेरे बारे में' },
  'btn.generateBio': { en: 'Generate with AI', hi: 'AI के साथ लिखें' },

  // Family Details
  'section.family': { en: 'Family Details', hi: 'परिवार का विवरण' },
  'field.fatherName': { en: 'Father\'s Name', hi: 'पिता का नाम' },
  'field.fatherOcc': { en: 'Father\'s Occupation', hi: 'पिता का व्यवसाय' },
  'field.motherName': { en: 'Mother\'s Name', hi: 'माता का नाम' },
  'field.motherOcc': { en: 'Mother\'s Occupation', hi: 'माता का व्यवसाय' },
  'field.siblings': { en: 'Siblings', hi: 'भाई-बहन' },
  'field.address': { en: 'Family Address', hi: 'घर का पता' },

  // Contact Details
  'section.contact': { en: 'Contact Details', hi: 'संपर्क विवरण' },
  'field.contactPerson': { en: 'Contact Person', hi: 'संपर्क व्यक्ति' },
  'field.phone': { en: 'Phone Number', hi: 'फ़ोन नंबर' },
  'field.email': { en: 'Email Address', hi: 'ईमेल पता' },

  // Additional Fields
  'section.habits': { en: 'Habits & Info', hi: 'आदतें और जानकारी' },
  'field.values': { en: 'Values', hi: 'मूल्य' },
  'field.familyType': { en: 'Family Type', hi: 'परिवार का प्रकार' },
  'field.gothra': { en: 'Gothra', hi: 'गोत्र' },
  'field.company': { en: 'Company', hi: 'कंपनी' },

  // Dropdown Options (Generic fallback)
  'option.select': { en: 'Select...', hi: 'चुनें...' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
