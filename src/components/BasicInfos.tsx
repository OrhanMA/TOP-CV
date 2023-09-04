import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { Person } from "../types/types";

export default function BasicInfos({ person }: Infos) {
  return (
    <div className="flex flex-col items-center py-6 gap-4 bg-sky-950 text-white">
      {person.fullname && <h1 className="text-3xl">{person.fullname}</h1>}
      {person.email && (
        <div className="flex items-center gap-2">
          <AiFillMail />
          <p>{person.email}</p>
        </div>
      )}
      <div className="flex items-center gap-6">
        {person.phone_number && (
          <div className="flex items-center gap-2">
            <BsFillTelephoneFill />
            <p>{person.phone_number}</p>
          </div>
        )}
        {person.address && (
          <div className="flex items-center gap-2">
            <FaLocationDot />
            <p>{person.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}

interface Infos {
  person: Person;
}
