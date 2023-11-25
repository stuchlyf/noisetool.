import React from "react";
import { BlobGroup } from "@/components/blobGroup";
import { Toolbar } from "@/components/toolbar";
import { cookies } from "next/headers";
import Timer from "@/components/timer";

export default function Page() {
  const volumeSsr = cookies().get("volume")?.value;

  return (
    <>
      <div className={'flex items-center gap-8 flex-col'}>
        <BlobGroup />
        <Timer />
      </div>
      <Toolbar volumeSsr={volumeSsr ? parseInt(volumeSsr) : undefined} />
    </>
  );
}