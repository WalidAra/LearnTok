import api from "@/lib/apis";
import { Box } from "@chakra-ui/react";
import React from "react";
import CategoryMenuItem from "./CategoryMenuItem";

export default async function CategoryMenuList() {
  const res: HTTPResponse = await api.getCategories();

  return (
    <Box className="w-full gap-2 flex flex-wrap">
      {res.data.map((c: Category) => {
        return <CategoryMenuItem key={c.id + "upload%"} c={c} />;
      })}
    </Box>
  );
}
