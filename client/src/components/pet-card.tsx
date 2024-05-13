import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const notifications = [
  {
    title: "Last seen",
    description: "Calle Minerva 4, 28013 Madrid",
  },
];

type CardProps = React.ComponentProps<typeof Card> & {
  pet: any;
  simplified?: boolean;
};

const PetCard = ({ className, simplified, pet, ...props }: CardProps) => {
  return (
    <Card
      className={cn(`w-[${simplified ? 200 : 380}px] m-2`, className)}
      {...props}>
      <CardHeader>
        <CardTitle>{pet.name}</CardTitle>
        {!simplified && (
          <CardDescription>Missing since 20.04.2024</CardDescription>
        )}
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <Image
            src="/default-dog.png"
            width={simplified ? 148 : 296}
            height={simplified ? 148 : 296}
            alt="Missing dog profile picture"
            className="rounded-md"
          />
        </div>
        {!simplified && (
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full">More details</Button>
      </CardFooter>
    </Card>
  );
};

export default PetCard;
