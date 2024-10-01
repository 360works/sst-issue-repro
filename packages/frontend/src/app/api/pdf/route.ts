import {NextResponse} from "next/server";

import {convertHtmlToPdfCoreFunction} from "@jll-permitting-app/core/htmlToPdf";

export const dynamic = "force-dynamic";

export async function POST() {
  console.log("This is an api route")
  const response = await convertHtmlToPdfCoreFunction("string")

  return NextResponse.json({
      status: 200,
      json: {
        response
      }
    })
}
