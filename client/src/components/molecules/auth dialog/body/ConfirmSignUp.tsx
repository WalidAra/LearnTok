/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/cli/shadcn/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/cli/shadcn/form";
import { Input } from "@/components/cli/shadcn/input";
import { Box, Flex, Link } from "@chakra-ui/react";
import RememberMe from "./RememberMe";
import SocialSignInPanel from "./SocialSignInPanel";
import { useMyForm } from "@/providers/Form";
import { signIn } from "next-auth/react";
import { Spinner } from "@nextui-org/react";
import { useFetch } from "@/hooks/useFetch";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function ConfirmSignUp() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    username: { username },
    fullName: { fullName },
  } = useMyForm();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [recall, setRecall] = useState<boolean>(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const res = await useFetch({
      method: "POST",
      body: {
        email: values.email,
        password: values.password,
        username,
        fullName,
        recall,
      },
      endPoint: "/auth/sign-up",
    });
    setIsLoading(false);

    if (res.status === true) {
      await signIn("credentials", {
        token: res.token as string,
        callbackUrl: "/",
        redirect: true,
      });
    } else if (res.data.isExist === true) {
      toast("This email already exists", {
        description: "Please sign up with a other email",
        action: {
          label: "Undo",
          onClick: () => {},
        },
      });
    }
  }

  return (
    <Box className="w-full px-1.5 flex flex-col shrink-0">
      <SocialSignInPanel isSignInForm={false} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <Flex className="items-center justify-between">
                  <FormLabel>Password</FormLabel>
                  <Link className="text-sm">Forget password</Link>
                </Flex>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="flex items-center gap-2">
                  <RememberMe recall={recall} setRecall={setRecall} />
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            {!isLoading ? (
              "Sign up"
            ) : (
              <Flex className="items-center gap-2">
                <Spinner size="sm" />
                loading...
              </Flex>
            )}
          </Button>
        </form>
      </Form>
    </Box>
  );
}
