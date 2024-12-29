'use client';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export function Home() {
  return (
    <div
      id="Home"
      className="relative flex min-h-screen items-center justify-center"
    >
      <Image
        src="/background.jpg"
        fill
        alt="background"
        className="absolute inset-0 object-cover size-full z-0 top-0"
        priority
      />
      <div className="z-10 max-w-screen-lg px-4 lg:px-0">
        <Card className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold">
              Omar Abdelqader
            </CardTitle>
            <CardDescription className="text-white">
              FullStack Software Engineer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>I am currently a Software Engineer at Gelber Group LLC.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
