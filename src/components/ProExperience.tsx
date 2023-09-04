export default function ProExperience() {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl bg-neutral-200 text-sky-900 font-bold py-1 text-center">
        Professional Experience
      </h2>
      <ul className="flex flex-col py-6 gap-6">
        {/* Map through education array */}
        <li>
          <div className="flex items-start gap-12">
            <div className="flex flex-col">
              <p>Date from to</p>
              <p className="text-lg">location</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-lg">company</p>
              <p>what you did in the company</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
