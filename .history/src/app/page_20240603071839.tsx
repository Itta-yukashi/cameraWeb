import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import BBSCardList from "./components/layouts/header/BBSCardList";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-3 px-4 py-4 gap-4" >
    <BBSCardList/>
    </main>
  );
}
