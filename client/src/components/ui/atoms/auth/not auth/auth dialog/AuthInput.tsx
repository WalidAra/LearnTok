import { Button } from "@/components/cli/button";
import { Input } from "@/components/cli/input";
import { Label } from "@/components/cli/label";
import { Flex } from "@chakra-ui/react";

type Props = {
  forwardRef: any;
  label: string;
  placeholder: string;
  type: string;
  isForgetPassword?: boolean;
};

export function InputWithLabel({
  forwardRef,
  label,
  placeholder,
  type,
  isForgetPassword = false,
}: Props) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Flex className="w-full items-center justify-between">
        <Label> {label} </Label>

        {isForgetPassword && <Button className="p-0" variant={"link"}>Forget password?</Button>}
      </Flex>
      <Input ref={forwardRef} type={type} placeholder={placeholder} />
    </div>
  );
}
