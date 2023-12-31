import { useState } from "react";
import { FormEducationProps } from "../types/types";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";

export function FormEducation({
  updateEducation,
  education,
  addEducation,
}: FormEducationProps) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((open) => !open);
  }
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Education:</h3>
        {open ? (
          <RiArrowDropDownFill
            onClick={handleOpen}
            className="w-[30px] h-[30px]"
          />
        ) : (
          <RiArrowDropUpFill
            onClick={handleOpen}
            className="w-[30px] h-[30px]"
          />
        )}
      </div>
      {open && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addEducation();
          }}
        >
          <div className="flex flex-col gap-2 my-6">
            <label htmlFor="date_from">From:</label>
            <input
              required
              onChange={updateEducation}
              value={education.date_from}
              className="px-2 py-1 bg-neutral-100 rounded-lg"
              type="text"
              name="date_from"
              id="date_from"
            />
          </div>
          <div className="flex flex-col gap-2 my-6">
            <label htmlFor="date_to">To:</label>
            <input
              required
              onChange={updateEducation}
              value={education.date_to}
              className="px-2 py-1 bg-neutral-100 rounded-lg"
              type="text"
              name="date_to"
              id="date_to"
            />
          </div>
          <div className="flex flex-col gap-2 my-6">
            <label htmlFor="university">University:</label>
            <input
              required
              onChange={updateEducation}
              value={education.university}
              className="px-2 py-1 bg-neutral-100 rounded-lg"
              type="text"
              name="university"
              id="university"
            />
          </div>
          <div className="flex flex-col gap-2 my-6">
            <label htmlFor="location">Location:</label>
            <input
              required
              onChange={updateEducation}
              value={education.location}
              className="px-2 py-1 bg-neutral-100 rounded-lg"
              type="text"
              name="location"
              id="location"
            />
          </div>
          <div className="flex flex-col gap-2 my-6">
            <label htmlFor="degree">Degree:</label>
            <input
              required
              onChange={updateEducation}
              value={education.degree}
              className="px-2 py-1 bg-neutral-100 rounded-lg"
              type="text"
              name="degree"
              id="degree"
            />
          </div>
          <button
            className="w-full text-center bg-neutral-300 px-4 py-2 rounded-md"
            type="submit"
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
}
