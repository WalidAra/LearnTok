"use client";
import React, { useState } from "react";
import FormWrapper from "../atoms/auth dialog/FormWrapper";
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
import { Flex, Link } from "@chakra-ui/react";
import RememberMe from "../atoms/auth dialog/body/RememberMe";
import api from "@/lib/apis";
import { signIn } from "next-auth/react";
import { useAuthDialog } from "@/context/AuthDialog";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const SignIn = () => {
  const { onClose } = useAuthDialog();
  const [isError, setIsError] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response: HTTPResponseWithToken = await api.Login({
      email: values.email,
      password: values.password,
    });

    if (response.status) {
      const res = await signIn("credentials", {
        token: response.token,
      });
      setIsError(false);
      onClose();
    } else {
      setIsError(true);
    }
  }

  return (
    <FormWrapper isSignInForm>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                <FormDescription className="flex flex-col gap-3">
                  <RememberMe />

                  {isError && (
                    <p className="font-medium text-red-500">
                      Invalid email or password. Please check your credentials
                      and try again.
                    </p>
                  )}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
};

export default SignIn;
