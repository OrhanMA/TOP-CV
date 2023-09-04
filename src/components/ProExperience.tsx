import { ExperienceProps } from "../types/types";
import { useState } from "react";
import { ExperienceInterface } from "../types/types";
export default function ProExperience({
  experienceArray,
  deleteExperience,
}: ExperienceProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedIndex, setEditedIndex] = useState(-1);
  const [editedExperience, setEditedExperience] = useState<ExperienceInterface>(
    {} as ExperienceInterface
  );

  const startEditing = (index: number) => {
    setIsEditing(true);
    setEditedIndex(index);
    // Copy the experience item to be edited into editedExperience
    setEditedExperience({ ...experienceArray[index] });
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setEditedIndex(-1);
    setEditedExperience({} as ExperienceInterface);
  };

  const saveExperience = () => {
    if (editedIndex !== -1) {
      // Update the experienceArray with the edited experience item
      experienceArray[editedIndex] = editedExperience;
      setIsEditing(false);
      setEditedIndex(-1);
      setEditedExperience({} as ExperienceInterface);
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-xl bg-neutral-200 text-yellow-900 font-bold py-1 text-center">
        Experience
      </h2>
      <ul className="flex flex-col py-6 gap-6">
        {experienceArray.map((experience, index) => {
          return (
            <li key={experience.mission}>
              {isEditing && index === editedIndex ? (
                // Display an editing form
                <div className="flex flex-col gap-2">
                  <input
                    className="bg-neutral-100 p-2 rounded-sm"
                    type="text"
                    value={editedExperience.date_from}
                    onChange={(e) =>
                      setEditedExperience({
                        ...editedExperience,
                        date_from: e.target.value,
                      })
                    }
                  />
                  <input
                    className="bg-neutral-100 p-2 rounded-sm"
                    type="text"
                    value={editedExperience.date_to}
                    onChange={(e) =>
                      setEditedExperience({
                        ...editedExperience,
                        date_to: e.target.value,
                      })
                    }
                  />
                  <input
                    className="bg-neutral-100 p-2 rounded-sm"
                    type="text"
                    value={editedExperience.location}
                    onChange={(e) =>
                      setEditedExperience({
                        ...editedExperience,
                        location: e.target.value,
                      })
                    }
                  />
                  <input
                    className="bg-neutral-100 p-2 rounded-sm"
                    type="text"
                    value={editedExperience.mission}
                    onChange={(e) =>
                      setEditedExperience({
                        ...editedExperience,
                        mission: e.target.value,
                      })
                    }
                  />
                  <input
                    className="bg-neutral-100 p-2 rounded-sm"
                    type="text"
                    value={editedExperience.company}
                    onChange={(e) =>
                      setEditedExperience({
                        ...editedExperience,
                        company: e.target.value,
                      })
                    }
                  />
                  <div className="w-full flex  gap-2">
                    <button
                      className="text-white px-4 py-2 bg-green-500 w-1/2"
                      onClick={saveExperience}
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
                // Display experience details
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <div className="w-1/2 flex flex-col">
                      <div>
                        <p className="text-sm">
                          {experience.date_from} - <br /> {experience.date_to}
                        </p>
                      </div>
                      <p className="text-lg">{experience.location}</p>
                    </div>
                    <div className="w-1/2 flex flex-col">
                      <p className="font-bold text-lg">{experience.company}</p>
                      <p>{experience.mission}</p>
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
                      onClick={() => deleteExperience(index)}
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
