import {
  Building,
  Map,
  Calendar,
  Flag,
  Sparkles,
  GraduationCap,
} from 'lucide-react';
import Image from 'next/image';

const aboutItems = [
  { label: 'Location', text: 'Chicago, IL', icon: Map },
  { label: 'Age', text: '24', icon: Calendar },
  { label: 'Nationality', text: 'Hispanic / Middle Eastern', icon: Flag },
  { label: 'Interests', text: 'Watching TV, Puzzles', icon: Sparkles },
  {
    label: 'Study',
    text: 'University of Illinois Urbana Champaign',
    icon: GraduationCap,
  },
  { label: 'Employment', text: 'Gelber Group LLC', icon: Building },
];

export function About() {
  return (
    <div id="about" className="bg-neutral-800 px-4 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-screen-lg">
        <div className="grid md:grid-cols-4 gap-y-4 bg-neutral-800">
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image
                alt="Headshot"
                height={100}
                width={100}
                className="h-full w-full object-cover"
                src="/Headshot.jpg"
              />
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-y-6 ">
            <div className="flex flex-col gap-y-2">
              <h2 className="text-2xl font-bold text-white">About me</h2>
              <p className="prose prose-sm  sm:prose-base text-gray-300">
                test
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutItems.map((item, idx) => (
                <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                  <item.icon className="text-white" />
                  <span className="text-sm font-bold text-white">
                    {item.label}:
                  </span>
                  <span className=" text-sm text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
