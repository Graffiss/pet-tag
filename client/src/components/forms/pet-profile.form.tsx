import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export enum MISSING_STATUS {
  MISSING = "MISSING",
  NOT_MISSING = "NOT_MISSING",
  FOUND = "FOUND",
}

export enum PET_TYPE {
  DOG = "DOG",
  CAT = "CAT",
  OTHER = "OTHER",
}

export interface PetProfile {
  addressId: string | null;
  belongsToId: string;
  birthdate: string | null;
  breed: string | null;
  color: string | null;
  createdAt: string;
  id: string;
  missing: MISSING_STATUS;
  name: string;
  primaryPhone: string | null;
  secondaryPhone: string | null;
  type: PET_TYPE;
  updatedAt: string;
  vetName: string | null;
}

interface PetProfileFormProps extends React.HTMLAttributes<HTMLDivElement> {
  pet?: PetProfile;
}

export function PetProfileForm({
  className,
  pet,
  ...props
}: PetProfileFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const FormSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    breed: z.string().nullish(),
    color: z.string().nullish(),
    primaryPhone: z.string().nullish(),
    secondaryPhone: z.string().nullish(),
    vetName: z.string().nullish(),
    birthdate: z.string().nullish(),
    petType: z.nativeEnum(PET_TYPE).readonly(),
    missingStatus: z.nativeEnum(MISSING_STATUS),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: pet?.name || "",
      breed: pet?.breed || "",
      color: pet?.color || "",
      primaryPhone: pet?.primaryPhone || "",
      secondaryPhone: pet?.secondaryPhone || "",
      vetName: pet?.vetName || "",
      birthdate: pet?.birthdate || "",
      petType: pet?.type || PET_TYPE.DOG,
      missingStatus: pet?.missing || MISSING_STATUS.NOT_MISSING,
    },
  });

  async function onSubmit(event: React.SyntheticEvent) {}

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={onSubmit}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pet name</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        placeholder="Pet name"
                        type="text"
                        disabled={pet ? true : false}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="breed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Breed</FormLabel>
                    <FormControl>
                      <Input
                        id="breed"
                        placeholder="Breed, e.g. Labrador for dogs, Siamese for cats, etc."
                        type="text"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>{" "}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pets fur color</FormLabel>
                    <FormControl>
                      <Input
                        id="color"
                        placeholder="Pet's fur color"
                        type="text"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="primaryPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary phone to the owner</FormLabel>
                    <FormControl>
                      <Input
                        id="primaryPhone"
                        placeholder="+1 555 555 555"
                        type="text"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="secondaryPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Secondary phone to second owner or phone in different
                      country
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="secondaryPhone"
                        placeholder="+34 333 222 111"
                        type="text"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="birthdate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pet&apos;s birthdate</FormLabel>
                    <FormControl>
                      <Input
                        id="birthdate"
                        placeholder="Pet's birthdate"
                        type="date"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="petType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pet type</FormLabel>
                    <FormControl>
                      <Select
                        defaultValue={pet ? field.value : ""}
                        disabled={pet ? true : false}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="DOG">Dog</SelectItem>
                          <SelectItem value="CAT">Cat</SelectItem>
                          <SelectItem value="OTHER">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="missingStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Is your pet currently missing?</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select pet's status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="NOT_MISSING">
                            Not missing
                          </SelectItem>
                          <SelectItem value="MISSING">Missing!</SelectItem>
                          <SelectItem value="FOUND">Found!</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      If your pet is missing we will display that information on
                      main page so everyone can help find your friend if they
                      are nearby
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={isLoading}>
              {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
              {pet ? "Save" : "Create"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
