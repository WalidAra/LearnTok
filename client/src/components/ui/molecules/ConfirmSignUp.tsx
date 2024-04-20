"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/cli/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/cli/form";
import { Input } from "@/components/cli/input";
import { Box, Flex, Link } from "@chakra-ui/react";
import RememberMe from "../atoms/auth dialog/body/RememberMe";
import SocialSignInPanel from "../atoms/auth dialog/body/SocialSignInPanel";
import { useMyForm } from "@/context/MyForm";
import { signIn } from "next-auth/react";
import api from "@/lib/apis";
import { useAuthDialog } from "@/context/AuthDialog";
import { Spinner } from "@nextui-org/react";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function ConfirmSignUp() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { onClose } = useAuthDialog();
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
    const result: HTTPResponseWithToken = await api.Register({
      email: values.email,
      password: values.password,
      fullName,
      username,
      recall,
    });

    if (result.status) {
      await signIn("credentials", {
        token: result.token,
      });
      onClose();
    }
  }

  return (
    <Box className="w-full px-1.5 flex flex-col">
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
