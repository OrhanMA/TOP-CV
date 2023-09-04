import { useState } from "react";
import { EducationInterface } from "../types/types";
import { EducationProps } from "../types/types";
export default function Education({
  educationArray,
  deleteEducation,
}: EducationProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedIndex, setEditedIndex] = useState(-1);
  const [editedEducation, setEditedEducation] = useState<EducationInterface>(
    {} as EducationInterface
  );

  const startEditing = (index: number) => {
    setIsEditing(true);
    setEditedIndex(index);
    // Copy the education item to be edited into editedEducation
    setEditedEducation({ ...educationArray[index] });
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setEditedIndex(-1);
    setEditedEducation({} as EducationInterface);
  };

  const saveEducation = () => {
    if (editedIndex !== -1) {
      // Update the educationArray with the edited education item
      educationArray[editedIndex] = editedEducation;
      setIsEditing(false);
      setEditedIndex(-1);
      setEditedEducation({} as EducationInterface);
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-xl bg-neutral-200 text-yellow-900 font-bold py-1 text-center">
        Education
      </h2>
      <ul className="flex flex-col py-6 gap-6">
        {educationArray.map((education, index) => {
          return (
            <li key={education.degree}>
              {isEditing && index === editedIndex ? (
                // Display an editing form
                <div className="flex flex-col gap-2">
                  <input
                    className="bg-neutral-100 p-2 rounded-sm"
                    type="text"
                    value={editedEducation.date_from}
                    onChange={(e) =>
                      setEditedEducation({
                        ...editedEducation,
                        date_from: e.target.value,
                      })
                    }
                  />
                  <input
                    className="bg-neutral-100 p-2 rounded-sm"
                    type="text"
                    value={editedEducation.date_to}
                    onChange={(e) =>
                      setEditedEducation({
                        ...editedEducation,
                        date_to: e.target.value,
                      })
                    }
                  />
                  <input
                    className="bg-neutral-100 p-2 rounded-sm"
                    type="text"
                    value={editedEducation.location}
                    onChange={(e) =>
                      setEditedEducation({
                        ...editedEducation,
                        location: e.target.value,
                      })
                    }
                  />
                  <input
                    className="bg-neutral-100 p-2 rounded-sm"
                    type="text"
                    value={editedEducation.degree}
                    onChange={(e) =>
                      setEditedEducation({
                        ...editedEducation,
                        degree: e.target.value,
                      })
                    }
                  />
                  <input
                    className="bg-neutral-100 p-2 rounded-sm"
                    type="text"
                    value={editedEducation.university}
                    onChange={(e) =>
                      setEditedEducation({
                        ...editedEducation,
                        university: e.target.value,
                      })
                    }
                  />
                  <div className="w-full flex  gap-2">
                    <button
                      className="text-white px-4 py-2 bg-green-500 w-1/2"
                      onClick={saveEducation}
                    >
                      Save
                    </button>
                    <button
                      className="text-white px-4 py-2 bg-red-500 w-1/2"
                      onClick={cancelEditing}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // Display education details
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <div className="w-1/2 flex flex-col">
                      <div>
                        <p className="text-sm">
                          {education.date_from} - <br /> {education.date_to}
                        </p>
                      </div>
                      <p className="text-lg">{education.location}</p>
                    </div>
                    <div className="w-1/2 flex flex-col">
                      <p className="font-bold text-lg">
                        {education.university}
                      </p>
                      <p>{education.degree}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEditing(index)}
                      className="w-1/2 text-white flex justify-center py-2 mt-4 bg-green-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteEducation(index)}
                      className="w-1/2 text-white flex justify-center py-2 mt-4 bg-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
