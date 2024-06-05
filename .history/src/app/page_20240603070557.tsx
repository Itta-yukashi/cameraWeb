import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est nulla doloremque sunt, aspernatur nostrum! Sapiente tenetur, ipsa maxime debitis, sed aspernatur nihil culpa, consequuntur itaque quidem eius atque earum.
        </CardContent>
        <CardFooter className="flex justify-between">
          <link href
        </CardFooter>
      </Card>
    </main>
  );
}
