import { PersonProps } from "../types/types";

export default function FormGeneralInfos({
  updatePerson,
  person,
}: PersonProps) {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h3 className="text-xl font-bold">Personal infos:</h3>
      <form>
        <div className="flex flex-col gap-2 my-6">
          <label htmlFor="name">Full name:</label>
          <input
            onChange={updatePerson}
            value={person.fullname}
            className="px-2 py-1 bg-neutral-100 rounded-lg"
            type="text"
            name="fullname"
            id="fullname"
          />
        </div>
        <div className="flex flex-col gap-2 my-6">
          <label htmlFor="email">Email:</label>
          <input
            onChange={updatePerson}
            value={person.email}
            className="px-2 py-1 bg-neutral-100 rounded-lg"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-2 my-6">
          <label htmlFor="phone_number">Phone number:</label>
          <input
            onChange={updatePerson}
            value={person.phone_number}
            className="px-2 py-1 bg-neutral-100 rounded-lg"
            type="text"
            name="phone_number"
            id="phone_number"
          />
        </div>
        <div className="flex flex-col gap-2 my-6">
          <label htmlFor="address">Address:</label>
          <input
            onChange={updatePerson}
            value={person.address}
            className="px-2 py-1 bg-neutral-100 rounded-lg"
            type="text"
            name="address"
            id="address"
          />
        </div>
      </form>
    </div>
  );
}
