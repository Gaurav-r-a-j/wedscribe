import React from 'react';
import { BiodataProfile } from '@/types';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PlaceholderImage, DetailItem } from './shared';

interface Props {
  profile: BiodataProfile;
}

export const MintBlossom: React.FC<Props> = ({ profile }) => {
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-[#f0fdf4] p-8 flex font-lato relative overflow-hidden">
      {/* Decorative Leaves */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/2 -left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-40"></div>

      <div className="w-full h-full bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white flex overflow-hidden relative z-10">
          {/* Left Side - 40% */}
          <div className="w-[40%] bg-green-50/50 p-8 flex flex-col border-r border-green-100">
              <h1 className="font-playfair text-3xl text-green-900 font-bold mb-1 leading-tight">{personal.fullName}</h1>
              <p className="text-green-600 text-xs font-bold uppercase tracking-widest mb-8">{education.occupation}</p>
              
              <div className="w-full aspect-[3/4] bg-white p-2 shadow-md rounded-lg mb-8 rotate-1">
                   {personal.photoUrl ? <img src={personal.photoUrl} className="w-full h-full object-cover rounded" alt="Profile" /> : <PlaceholderImage className="w-full h-full rounded" />}
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 mt-auto">
                  <h3 className="text-green-800 font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Contact
                  </h3>
                  <div className="space-y-3 text-sm text-green-900">
                      <div className="flex items-center gap-3"><Phone size={14} className="text-green-500"/> {contact.contactNumber}</div>
                      <div className="flex items-center gap-3"><Mail size={14} className="text-green-500"/> {contact.email}</div>
                      <div className="flex items-start gap-3"><MapPin size={14} className="text-green-500 mt-1"/> <span className="whitespace-pre-line">{contact.address}</span></div>
                  </div>
              </div>
          </div>

          {/* Right Side - 60% */}
          <div className="w-[60%] p-10 flex flex-col gap-10 overflow-y-auto">
              {education.aboutMe && (
                  <div className="relative pl-6">
                      <span className="absolute left-0 top-0 text-4xl text-green-300 font-serif">"</span>
                      <p className="text-green-900/80 italic leading-relaxed text-sm pt-2 whitespace-pre-line">
                          {education.aboutMe}
                      </p>
                  </div>
              )}

              <div className="space-y-8">
                  <div>
                      <h2 className="text-lg font-bold text-green-800 border-b-2 border-green-100 pb-2 mb-4 inline-block pr-8">Personal Information</h2>
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                           <DetailItem label="Date of Birth" value={personal.dateOfBirth} labelClass="text-green-600" />
                           <DetailItem label="Time of Birth" value={personal.timeOfBirth} labelClass="text-green-600" />
                           <DetailItem label="Height" value={personal.height} labelClass="text-green-600" />
                           <DetailItem label="Complexion" value={personal.complexion} labelClass="text-green-600" />
                           <DetailItem label="Rashi" value={personal.rashi} labelClass="text-green-600" />
                           <DetailItem label="Manglik" value={personal.manglik} labelClass="text-green-600" />
                      </div>
                  </div>

                  <div>
                      <h2 className="text-lg font-bold text-green-800 border-b-2 border-green-100 pb-2 mb-4 inline-block pr-8">Education & Career</h2>
                      <div className="grid grid-cols-1 gap-y-4">
                           <DetailItem label="Highest Degree" value={education.education} labelClass="text-green-600" />
                           <DetailItem label="Occupation" value={`${education.occupation} at ${education.company}`} labelClass="text-green-600" />
                           <DetailItem label="Income" value={education.income} labelClass="text-green-600" />
                      </div>
                  </div>

                  <div>
                      <h2 className="text-lg font-bold text-green-800 border-b-2 border-green-100 pb-2 mb-4 inline-block pr-8">Family Details</h2>
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                           <DetailItem label="Father" value={family.fatherName} labelClass="text-green-600" />
                           <DetailItem label="Mother" value={family.motherName} labelClass="text-green-600" />
                           <div className="col-span-2">
                              <DetailItem label="Siblings" value={family.siblings} labelClass="text-green-600" />
                           </div>
                           <div className="col-span-2">
                              <DetailItem label="Native" value={family.nativePlace} labelClass="text-green-600" />
                           </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};
