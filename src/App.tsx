import CvDisplay from "./components/CvDisplay";
import FormGroup from "./components/FormGroup";
import { EducationInterface, Person } from "./types/types";
import { ChangeEvent, useState } from "react";

function App() {
  const [person, setPerson] = useState<Person>({
    fullname: "John Doe",
    email: "john.doe@gmail.com",
    phone_number: "0123456789",
    address: "1 rue de Paris",
  });
  const [education, setEducation] = useState<EducationInterface>({
    date_from: "",
    date_to: "",
    university: "",
    location: "",
    degree: "",
  });
  const [educationArray, setEducationArray] = useState<EducationInterface[]>([
    {
      date_from: "11/11/2020",
      date_to: "10/10/2022",
      location: "Cambridge",
      university: "Harvard",
      degree: "Computer Science",
    },
  ]);

  function handleChangePerson(e: ChangeEvent<HTMLInputElement>) {
    setPerson((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleChangeEducation(e: ChangeEvent<HTMLInputElement>) {
    setEducation((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function addEducation() {
    setEducationArray([...educationArray, education]);
    setEducation({
      date_from: "",
      date_to: "",
      university: "",
      location: "",
      degree: "",
    });
  }

  function deleteEducation(indexToDelete: number) {
    setEducationArray((prevEducationArray) => {
      // Create a new array without the education item at the specified index
      const updatedEducationArray = [
        ...prevEducationArray.slice(0, indexToDelete),
        ...prevEducationArray.slice(indexToDelete + 1),
      ];
      return updatedEducationArray;
    });
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-6 bg-neutral-100">
      <FormGroup
        updatePerson={handleChangePerson}
        person={person}
        updateEducation={handleChangeEducation}
        education={education}
        addEducation={addEducation}
      />
      <CvDisplay
        person={person}
        educationArray={educationArray}
        deleteEducation={deleteEducation}
      />
    </div>
  );
}

export default App;
