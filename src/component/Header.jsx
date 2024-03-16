import { Flex } from "@radix-ui/themes";
import Popup from "./Popup";

export default function Header() {
  return (
    <div className="flex justify-between items-center mt-4">
      <h1 className="text-1xl font-bold">Lawrence Staking</h1>
      <Flex gap={"7"} align={"center"}>
        <Popup />
        <w3m-button />
      </Flex>
    </div>
  );
}
