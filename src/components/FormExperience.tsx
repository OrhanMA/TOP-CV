import { FormExperienceProps } from "../types/types";

export function FormExperience({
  updateExperience,
  experience,
  addExperience,
}: FormExperienceProps) {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h3 className="text-xl font-bold">Experience:</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addExperience();
        }}
      >
        <div className="flex flex-col gap-2 my-6">
          <label htmlFor="date_from">From:</label>
          <input
            required
            onChange={updateExperience}
            value={experience.date_from}
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
            onChange={updateExperience}
            value={experience.date_to}
            className="px-2 py-1 bg-neutral-100 rounded-lg"
            type="text"
            name="date_to"
            id="date_to"
          />
        </div>
        <div className="flex flex-col gap-2 my-6">
          <label htmlFor="company">Company:</label>
          <input
            required
            onChange={updateExperience}
            value={experience.company}
            className="px-2 py-1 bg-neutral-100 rounded-lg"
            type="text"
            name="company"
            id="company"
          />
        </div>
        <div className="flex flex-col gap-2 my-6">
          <label htmlFor="location">Location:</label>
          <input
            required
            onChange={updateExperience}
            value={experience.location}
            className="px-2 py-1 bg-neutral-100 rounded-lg"
            type="text"
            name="location"
            id="location"
          />
        </div>
        <div className="flex flex-col gap-2 my-6">
          <label htmlFor="mission">Mission:</label>
          <input
            required
            onChange={updateExperience}
            value={experience.mission}
            className="px-2 py-1 bg-neutral-100 rounded-lg"
            type="text"
            name="mission"
            id="mission"
          />
        </div>
        <button
          className="w-full text-center bg-neutral-300 px-4 py-2 rounded-md"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}
