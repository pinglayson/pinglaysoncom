import Image from "next/image";
import { qualifications } from "@/constants";

export default function Home() {
  return (
    <div className="flex items-center flex-column flex-wrap-reverse">
      <div className="sm:basis-1/2">
        {qualifications.map((qualification) => (
          <div key={qualification.title} className="py-2">
            {qualification.title !== "" && (
              <h2 className="text font-bold">{qualification.title}:</h2>
            )}
            <p>{qualification.desc}</p>
          </div>
        ))}
      </div>
      <div className="sm:basis-1/2">
        <Image
          className="rounded-full mx-auto py-2"
          height={400}
          width={400}
          src="/avatar.svg"
          alt="ping layson's avatar"
        />
      </div>
    </div>
  );
}
