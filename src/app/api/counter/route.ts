import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

type Data = {
  name: string;
};

export async function GET(request: NextApiRequest) {

  return NextResponse.json({
    count: 100,
  });
}

export async function POST(request: NextApiRequest) {

  return NextResponse.json({
    count: 100,
  });
}
