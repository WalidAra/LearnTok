"use client";
import React from "react";
import FormWrapper from "../FormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/cli/shadcn/form'
import { Input } from "@/components/cli/shadcn/input"; 
import { Flex, Link } from "@chakra-ui/react";
import { useMyForm } from "@/providers/Form";
import { Button } from "@/components/cli/shadcn/button";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  fullName: z.string().min(6).max(50),
});

const SignUp = () => {
  const {
    slide: { setPage },
    username: { setUsername },
    fullName: { setFullName },
  } = useMyForm();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    setUsername(values.username);
    setFullName(values.fullName);
    setPage(2);
  }

  return (
    <FormWrapper isSignInForm={false}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormDescription className="flex items-center gap-2">
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <Flex className="items-center justify-between">
                  <FormLabel>Full name</FormLabel>
                  <Link className="text-sm">Forget password</Link>
                </Flex>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Next
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
};

export default SignUp;
