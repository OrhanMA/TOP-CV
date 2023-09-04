import { ChangeEvent } from "react";

export interface Person {
  fullname: string;
  email: string;
  phone_number: string;
  address: string;
}

export interface FormProps {
  updatePerson: (e: ChangeEvent<HTMLInputElement>) => void;
  person: Person;
  updateEducation: (e: ChangeEvent<HTMLInputElement>) => void;
  education: EducationInterface;
  addEducation: () => void;
  updateExperience: (e: ChangeEvent<HTMLInputElement>) => void;
  experience: ExperienceInterface;
  addExperience: () => void;
}

export interface PersonProps {
  updatePerson: (e: ChangeEvent<HTMLInputElement>) => void;
  person: Person;
}

export interface FormEducationProps {
  updateEducation: (e: ChangeEvent<HTMLInputElement>) => void;
  education: EducationInterface;
  addEducation: () => void;
}
export interface FormExperienceProps {
  updateExperience: (e: ChangeEvent<HTMLInputElement>) => void;
  experience: ExperienceInterface;
  addExperience: () => void;
}

export interface EducationInterface {
  date_from: string;
  date_to: string;
  university: string;
  location: string;
  degree: string;
}
export interface ExperienceInterface {
  date_from: string;
  date_to: string;
  company: string;
  location: string;
  mission: string;
}

export interface CvInfos {
  person: Person;
  educationArray: EducationInterface[];
  deleteEducation: (indexToDelete: number) => void;
  experienceArray: ExperienceInterface[];
  deleteExperience: (indexToDelete: number) => void;
}

export interface EducationProps {
  educationArray: EducationInterface[];
  deleteEducation: (indexToDelete: number) => void;
}
export interface ExperienceProps {
  experienceArray: ExperienceInterface[];
  deleteExperience: (indexToDelete: number) => void;
}
