import BasicInfos from "./BasicInfos";
import Education from "./Education";
import ProExperience from "./ProExperience";
import { CvInfos } from "../types/types";

export default function CvDisplay({
  person,
  educationArray,
  deleteEducation,
  experienceArray,
  deleteExperience,
}: CvInfos) {
  return (
    <div className="flex flex-col w-full sm:w-2/3">
      <BasicInfos person={person} />
      <div className="bg-white p-6">
        <Education
          educationArray={educationArray}
          deleteEducation={deleteEducation}
        />
        <ProExperience
          experienceArray={experienceArray}
          deleteExperience={deleteExperience}
        />
      </div>
    </div>
  );
}
