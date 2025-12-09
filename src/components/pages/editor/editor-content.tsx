import React, { useCallback } from 'react';
import { UserCircle, PenTool, GraduationCap, Users, Phone, Wand2 } from 'lucide-react';
import { BiodataProfile } from '@/types';
import { FormSection } from '@/components/common/FormSection';
import { Button } from '@/components/ui/button';
import { FormInput, FormSelect, FormTextarea } from '@/components/forms';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { useProfileStore } from '@/store/profileStore';

interface EditorContentProps {
  onGenerateBio: () => void;
  isGeneratingBio: boolean;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputGroupProps {
  label: string;
  value: string;
  section: keyof BiodataProfile;
  field: string;
  type?: 'text' | 'textarea' | 'select' | 'date' | 'time';
  placeholder?: string;
  options?: string[];
}

// Move InputGroup outside to prevent recreation on every render
const InputGroup: React.FC<InputGroupProps> = React.memo(({ 
  label, 
  value, 
  section, 
  field, 
  type = "text", 
  placeholder = "", 
  options = [] 
}) => {
  const updateSection = useProfileStore((state) => state.updateSection);
  
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateSection(section, field, e.target.value);
  }, [section, field, updateSection]);

  const handleSelectChange = useCallback((newValue: string) => {
    updateSection(section, field, newValue);
  }, [section, field, updateSection]);

  if (type === 'select') {
    return (
      <FormSelect
        label={label}
        value={value || ''}
        onValueChange={handleSelectChange}
        options={options}
        placeholder={placeholder || 'Select...'}
      />
    );
  } else if (type === 'textarea') {
    return (
      <FormTextarea
        label={label}
        value={value || ''}
        placeholder={placeholder}
        onChange={handleChange}
        className="h-24"
      />
    );
  } else {
    return (
      <FormInput
        label={label}
        type={type}
        value={value || ''}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }
});

InputGroup.displayName = 'InputGroup';

export const EditorContent: React.FC<EditorContentProps> = ({ 
  onGenerateBio, 
  isGeneratingBio,
  handleImageUpload
}) => {
  const profile = useProfileStore((state) => state.profile);
  const updateSection = useProfileStore((state) => state.updateSection);

  const { t } = useLanguage();

  const handleAboutMeChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateSection('education', 'aboutMe', e.target.value);
  }, [updateSection]);

  return (
      <div className="space-y-4 pb-20 md:pb-0">
          {/* Photo Upload Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-5 p-5 bg-slate-50 rounded-xl border border-slate-100 mb-6"
          >
            <div className="relative group shrink-0">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                    {profile.personal.photoUrl ? (
                        <img src={profile.personal.photoUrl} className="w-full h-full object-cover" />
                    ) : <UserCircle className="text-slate-200" size={48} />}
                </div>
                <label className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 rounded-full cursor-pointer transition-all duration-200 backdrop-blur-[1px]">
                    <PenTool size={16} />
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
            </div>
            <div>
                <h3 className="text-sm font-bold text-slate-900">{t('label.photo')}</h3>
                <p className="text-xs text-slate-500 mt-1 mb-2">{t('label.recPhoto')}</p>
                <label className="text-xs font-bold text-primary cursor-pointer hover:underline">
                    {t('label.changePhoto')}
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
            </div>
            </motion.div>

            <FormSection title={t('section.personalInfo')} icon={<UserCircle size={18} />} defaultOpen={true}>
                <InputGroup label={t('field.fullName')} value={profile.personal.fullName} section="personal" field="fullName" placeholder={t('placeholder.name')} />
                <div className="grid grid-cols-2 gap-4">
                <InputGroup label={t('field.dob')} value={profile.personal.dateOfBirth} section="personal" field="dateOfBirth" type="date" />
                <InputGroup label={t('field.tob')} value={profile.personal.timeOfBirth} section="personal" field="timeOfBirth" type="time" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                <InputGroup 
                    label={t('field.height')} 
                    value={profile.personal.height} 
                    section="personal" 
                    field="height" 
                    type="select"
                    options={['5ft 0in', '5ft 1in', '5ft 2in', '5ft 3in', '5ft 4in', '5ft 5in', '5ft 6in', '5ft 7in', '5ft 8in', '5ft 9in', '5ft 10in', '5ft 11in', '6ft 0in', '6ft 1in', '6ft 2in', '6ft 3in', '6ft 4in', '6ft 5in', '6ft 6in']}
                />
                <InputGroup label={t('field.weight')} value={profile.personal.weight} section="personal" field="weight" placeholder={t('placeholder.weight')} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                <InputGroup 
                    label={t('field.complexion')} 
                    value={profile.personal.complexion} 
                    section="personal" 
                    field="complexion" 
                    type="select"
                    options={['Fair', 'Wheatish Fair', 'Wheatish', 'Dark', 'Very Fair', 'Light Brown', 'Medium Brown', 'Dark Brown']}
                />
                <InputGroup 
                    label={t('field.bloodGroup')} 
                    value={profile.personal.bloodGroup} 
                    section="personal" 
                    field="bloodGroup" 
                    type="select"
                    options={['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']}
                />
                </div>
                <InputGroup 
                    label={t('field.maritalStatus')} 
                    value={profile.personal.maritalStatus} 
                    section="personal" 
                    field="maritalStatus" 
                    type="select"
                    options={['Never Married', 'Divorced', 'Widowed', 'Separated']}
                />
            </FormSection>

            <FormSection title={t('section.careerEdu')} icon={<GraduationCap size={18} />}>
            <div className="space-y-4">
                <InputGroup label={t('field.education')} value={profile.education.education} section="education" field="education" placeholder={t('placeholder.edu')} type="textarea" />
                <InputGroup label={t('field.occupation')} value={profile.education.occupation} section="education" field="occupation" placeholder={t('placeholder.occ')} />
                <div className="grid grid-cols-2 gap-4">
                    <InputGroup label={t('field.company')} value={profile.education.company} section="education" field="company" />
                    <InputGroup label={t('field.income')} value={profile.education.income} section="education" field="income" placeholder={t('placeholder.income')} />
                </div>
                
                <div className="pt-2">
                    <div className="flex justify-between items-center mb-2">
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('label.profSummary')}</label>
                        <Button 
                            onClick={onGenerateBio}
                            disabled={isGeneratingBio}
                            size="sm"
                            variant="ghost"
                            className="text-[10px] flex items-center gap-1.5 text-primary font-bold uppercase tracking-wider bg-primary/5 hover:bg-primary/10 px-2 py-1 rounded transition-colors disabled:opacity-50"
                        >
                            <Wand2 size={12} /> {isGeneratingBio ? t('label.writing') : t('label.aiEnhance')}
                        </Button>
                    </div>
                    <FormTextarea
                    value={profile.education.aboutMe}
                    onChange={handleAboutMeChange}
                    className="h-32 leading-relaxed"
                    placeholder={t('placeholder.summary')}
                    />
                </div>
            </div>
            </FormSection>

            <FormSection title={t('section.familyDetails')} icon={<Users size={18} />}>
                <div className="grid grid-cols-2 gap-4">
                <InputGroup 
                    label={t('field.religion')} 
                    value={profile.personal.religion} 
                    section="personal" 
                    field="religion" 
                    type="select"
                    options={['Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Buddhist', 'Parsi', 'Other']}
                />
                <InputGroup label={t('field.caste')} value={profile.personal.caste} section="personal" field="caste" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                <InputGroup label={t('field.gothra')} value={profile.personal.gothra} section="personal" field="gothra" />
                <InputGroup label={t('field.manglik')} value={profile.personal.manglik} section="personal" field="manglik" type="select" options={[t('option.no'), t('option.yes'), t('option.anshik'), t('option.dontKnow')]} />
                </div>
                <InputGroup 
                    label={t('field.rashi')} 
                    value={profile.personal.rashi} 
                    section="personal" 
                    field="rashi" 
                    type="select"
                    options={['Mesha (Aries)', 'Vrishabha (Taurus)', 'Mithuna (Gemini)', 'Karka (Cancer)', 'Simha (Leo)', 'Kanya (Virgo)', 'Tula (Libra)', 'Vrishchika (Scorpio)', 'Dhanu (Sagittarius)', 'Makara (Capricorn)', 'Kumbha (Aquarius)', 'Meena (Pisces)']}
                />
                
                <div className="my-4 border-t border-slate-100"></div>
                
                <div className="space-y-4">
                <InputGroup label={t('field.fatherName')} value={profile.family.fatherName} section="family" field="fatherName" />
                <InputGroup label={t('field.fatherOcc')} value={profile.family.fatherOccupation} section="family" field="fatherOccupation" />
                <InputGroup label={t('field.motherName')} value={profile.family.motherName} section="family" field="motherName" />
                <InputGroup label={t('field.motherOcc')} value={profile.family.motherOccupation} section="family" field="motherOccupation" />
                <div className="grid grid-cols-2 gap-4">
                    <InputGroup 
                        label={t('field.familyType')} 
                        value={profile.family.familyType} 
                        section="family" 
                        field="familyType" 
                        type="select"
                        options={['Nuclear Family', 'Joint Family', 'Extended Family']}
                    />
                    <InputGroup 
                        label={t('field.values')} 
                        value={profile.family.familyValues} 
                        section="family" 
                        field="familyValues" 
                        type="select"
                        options={['Orthodox', 'Moderate', 'Liberal', 'Very Liberal']}
                    />
                </div>
                <InputGroup label={t('field.siblings')} value={profile.family.siblings} section="family" field="siblings" placeholder={t('placeholder.siblings')} type="textarea" />
                <InputGroup label={t('field.nativePlace')} value={profile.family.nativePlace} section="family" field="nativePlace" />
                </div>
            </FormSection>
            
            <FormSection title={t('section.contactInfo')} icon={<Phone size={18} />}>
            <div className="space-y-4">
                <InputGroup label={t('label.mobile')} value={profile.contact.contactNumber} section="contact" field="contactNumber" />
                <InputGroup label={t('label.email')} value={profile.contact.email} section="contact" field="email" />
                <InputGroup label={t('label.address')} value={profile.contact.address} section="contact" field="address" type="textarea" />
            </div>
            </FormSection>
      </div>
  );
};
