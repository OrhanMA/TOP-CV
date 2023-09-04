import CvDisplay from "./components/CvDisplay";
import FormGroup from "./components/FormGroup";
import { EducationInterface, ExperienceInterface, Person } from "./types/types";
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
  const [experience, setExperience] = useState<ExperienceInterface>({
    date_from: "",
    date_to: "",
    company: "",
    location: "",
    mission: "",
  });
  const [experienceArray, setExperienceArray] = useState<ExperienceInterface[]>(
    [
      {
        date_from: "11/11/2020",
        date_to: "10/10/2022",
        company: "Company.co",
        location: "New York",
        mission: "Doing crazy stuff",
      },
    ]
  );

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
  function handleChangeExperience(e: ChangeEvent<HTMLInputElement>) {
    setExperience((prev) => {
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
  function addExperience() {
    setExperienceArray([...experienceArray, experience]);
    setExperience({
      date_from: "",
      date_to: "",
      company: "",
      location: "",
      mission: "",
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
  function deleteExperience(indexToDelete: number) {
    setExperienceArray((prevExperienceArray) => {
      // Create a new array without the education item at the specified index
      const updatedExperienceArray = [
        ...prevExperienceArray.slice(0, indexToDelete),
        ...prevExperienceArray.slice(indexToDelete + 1),
      ];
      return updatedExperienceArray;
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
        updateExperience={handleChangeExperience}
        experience={experience}
        addExperience={addExperience}
      />
      <CvDisplay
        person={person}
        educationArray={educationArray}
        deleteEducation={deleteEducation}
        experienceArray={experienceArray}
        deleteExperience={deleteExperience}
      />
    </div>
  );
}

export default App;
