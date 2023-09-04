import { MdDeleteForever } from "react-icons/md";
import { EducationProps } from "../types/types";
import { AiFillEdit } from "react-icons/ai";

export default function Education({
  educationArray,
  deleteEducation,
}: EducationProps) {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl bg-neutral-200 text-sky-900 font-bold py-1 text-center">
        Education
      </h2>
      <ul className="flex flex-col py-6 gap-6">
        {educationArray.map((education, index) => {
          return (
            <li key={education.degree}>
              <div className="flex items-center gap-2">
                <div className="w-1/2 flex flex-col">
                  <div>
                    <p className="text-sm">
                      {education.date_from} - <br /> {education.date_to}
                    </p>
                  </div>
                  <p className="text-lg">{education.location}</p>
                </div>
                <div className="w-1/2 flex flex-col">
                  <p className="font-bold text-lg">{education.university}</p>
                  <p>{education.degree}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    editEducation(index);
                  }}
                  className="w-full flex justify-center py-2 mt-4  bg-green-500"
                >
                  <AiFillEdit className="w-[20px] h-[20px]" />
                </button>
                <button
                  onClick={() => {
                    deleteEducation(index);
                  }}
                  className="w-full flex justify-center py-2 mt-4  bg-red-500"
                >
                  <MdDeleteForever className="w-[20px] h-[20px]" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
