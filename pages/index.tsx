import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12 grid gap-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Kian Laghaei</h1>
        <p className="text-lg text-gray-600 mt-2">
          Backend Developer | AI Enthusiast | Game Developer (Unreal/VR)
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">About Me</h2>
            <p className="mt-2 text-gray-700">
              I’m a backend developer with a strong interest in AI and intelligent systems.
              I love connecting APIs, designing smart architectures, and also enjoy building immersive VR content with Unreal Engine.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Projects</h2>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Smart Glove for Parkinson’s Patients</li>
              <li>Machine Learning for Currency Prediction</li>
              <li>VR Intro for Engineering Company (Unreal Engine)</li>
              <li>Custom Backend CMS for Industrial Blog</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Links</h2>
            <div className="mt-2 flex flex-col gap-2">
              <Link href="https://github.com/kianla9519" legacyBehavior><a className="text-blue-600 hover:underline">GitHub</a></Link>
              <Link href="https://linkedin.com/in/kian-laghaei" legacyBehavior><a className="text-blue-600 hover:underline">LinkedIn</a></Link>
              <Link href="mailto:kian@example.com" legacyBehavior><a className="text-blue-600 hover:underline">Email Me</a></Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Kian Laghaei. All rights reserved.
      </footer>
    </div>
  );
}
