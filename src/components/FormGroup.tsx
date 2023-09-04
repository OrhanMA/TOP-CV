import FormGeneralInfos from "./FormGeneralInfos";
import { FormProps } from "../types/types";
import { FormEducation } from "./FormEducation";
import { FormExperience } from "./FormExperience";
export default function FormGroup({
  updatePerson,
  person,
  updateEducation,
  education,
  addEducation,
  updateExperience,
  experience,
  addExperience,
}: FormProps) {
  return (
    <div className="flex flex-col w-full gap-6 sm:w-1/3">
      <FormGeneralInfos updatePerson={updatePerson} person={person} />
      <FormEducation
        updateEducation={updateEducation}
        education={education}
        addEducation={addEducation}
      />
      <FormExperience
        updateExperience={updateExperience}
        experience={experience}
        addExperience={addExperience}
      />
    </div>
  );
}
