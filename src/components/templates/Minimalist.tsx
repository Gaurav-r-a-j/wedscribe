import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage, DetailItem } from './shared';

interface Props {
  profile: BiodataProfile;
}

export const Minimalist: React.FC<Props> = ({ profile }) => {
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-white text-black p-12 font-lato flex flex-col">
      {/* Header Block */}
      <div className="flex items-end justify-between border-b-[6px] border-black pb-8 mb-12">
          <div>
              <h1 className="text-7xl font-black uppercase tracking-tighter leading-[0.8]">{personal.fullName?.split(' ')[0]}</h1>
              <h1 className="text-7xl font-black uppercase tracking-tighter leading-[0.8] text-gray-300">{personal.fullName?.split(' ').slice(1).join(' ')}</h1>
          </div>
          <div className="text-right">
              <p className="font-bold text-xl uppercase tracking-widest">{education.occupation}</p>
              <p className="text-gray-500 font-mono text-sm mt-1">{personal.placeOfBirth}</p>
          </div>
      </div>

      <div className="flex grow gap-16">
          {/* Left Column 25% - Photo & Metrics */}
          <div className="w-[25%] flex flex-col">
               <div className="w-full aspect-square bg-gray-100 mb-8 grayscale contrast-125">
                   {personal.photoUrl ? <img src={personal.photoUrl} className="w-full h-full object-cover" alt="Profile" /> : <PlaceholderImage className="w-full h-full" />}
               </div>

               <div className="space-y-6">
                  <div className="border-l-4 border-black pl-4">
                      <span className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Height</span>
                      <span className="text-xl font-bold">{personal.height}</span>
                  </div>
                  <div className="border-l-4 border-black pl-4">
                      <span className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Age</span>
                      <span className="text-xl font-bold">{new Date().getFullYear() - new Date(personal.dateOfBirth).getFullYear()} Yrs</span>
                  </div>
                  <div className="border-l-4 border-black pl-4">
                      <span className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Blood</span>
                      <span className="text-xl font-bold">{personal.bloodGroup}</span>
                  </div>
               </div>
          </div>

          {/* Right Column 75% - The Grid */}
          <div className="w-[75%] grid grid-cols-2 gap-x-12 gap-y-12 content-start">
              <div className="col-span-2">
                  <h3 className="bg-black text-white inline-block px-2 py-1 text-xs font-black uppercase tracking-widest mb-4">About</h3>
                  <p className="text-xl font-light leading-relaxed text-gray-800 whitespace-pre-line">
                      {education.aboutMe || "A brief introduction about personality, values, and what is expected from a partner."}
                  </p>
              </div>

              <div>
                  <h3 className="bg-black text-white inline-block px-2 py-1 text-xs font-black uppercase tracking-widest mb-6">Education</h3>
                  <div className="space-y-4">
                      <DetailItem label="Degree" value={education.education} />
                      <DetailItem label="Profession" value={education.occupation} />
                      <DetailItem label="Organization" value={education.company} />
                  </div>
              </div>

              <div>
                  <h3 className="bg-black text-white inline-block px-2 py-1 text-xs font-black uppercase tracking-widest mb-6">Family</h3>
                  <div className="space-y-4">
                      <DetailItem label="Father" value={family.fatherName} />
                      <DetailItem label="Mother" value={family.motherName} />
                      <DetailItem label="Residence" value={family.nativePlace} />
                  </div>
              </div>

              <div className="col-span-2 border-t border-gray-200 pt-8 flex justify-between items-end">
                  <div>
                      <h3 className="bg-black text-white inline-block px-2 py-1 text-xs font-black uppercase tracking-widest mb-2">Contact</h3>
                      <p className="font-bold text-lg">{contact.contactNumber}</p>
                      <p className="text-gray-500">{contact.email}</p>
                  </div>
                  <div className="text-right max-w-xs">
                      <p className="text-sm text-gray-400 whitespace-pre-line">{contact.address}</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};
