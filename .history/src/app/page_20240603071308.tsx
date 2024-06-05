import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid lg:grid-">
      <Card >
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est nulla doloremque sunt, aspernatur nostrum! Sapiente tenetur, ipsa maxime debitis, sed aspernatur nihil culpa, consequuntur itaque quidem eius atque earum.
        </CardContent>
        <CardFooter className="flex justify-between">
        <a href="/bbs-posts/1" target="_blank" rel="noopener noreferrer">続きを読む</a>
    
        </CardFooter>
      </Card>
    </main>
  );
}
