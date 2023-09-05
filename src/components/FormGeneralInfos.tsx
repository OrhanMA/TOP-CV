import { useState } from "react";
import { PersonProps } from "../types/types";
import { RiArrowDropUpFill, RiArrowDropDownFill } from "react-icons/ri";

export default function FormGeneralInfos({
  updatePerson,
  person,
}: PersonProps) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((open) => !open);
  }
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Personal infos:</h3>
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
      )}
    </div>
  );
}
