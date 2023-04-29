import React from "react";
import { BlobGroup } from "@/components/blobGroup";
import { Toolbar } from "@/components/toolbar";
import { cookies } from "next/headers";

export default function Page() {
  const volumeSsr = cookies().get("volume")?.value;

  return (
    <>
      <BlobGroup />
      <Toolbar volumeSsr={volumeSsr ? parseInt(volumeSsr) : undefined} />
    </>
  );
}