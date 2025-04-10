import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button>Primary</Button>
      <Button variant={"destructive"} size={"lg"}>
        Destructive
      </Button>
      <Button variant={"outline"} size={"sm"}>
        Outline
      </Button>
      <Button variant={"secondary"} size="xs">
        Secondary
      </Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"muted"}>Muted</Button>
      <Button variant={"teritary"}>teritary</Button>
    </div>
  );
}
