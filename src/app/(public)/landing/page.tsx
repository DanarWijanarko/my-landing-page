import Image from "next/image";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Landing = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>NarVerse Landing Page</CardTitle>
          <CardDescription>A landing page for your design system.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Image
            src="/logo.png"
            alt="NarVerse Logo"
            loading="eager"
            width={200}
            height={100}
            className="w-auto h-auto"
          />
          <div>Work in progress</div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Landing;
