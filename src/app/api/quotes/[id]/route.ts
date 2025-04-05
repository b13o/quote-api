import { NextResponse } from "next/server";
import { quotes } from "@/data/quotes";

export const dynamic = "force-static";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const quoteId = parseInt(id);

  if (isNaN(quoteId) || quoteId < 1 || quoteId > quotes.length) {
    return NextResponse.json({ error: "Quote not found" }, { status: 404 });
  }

  const quote = quotes[quoteId - 1];
  return NextResponse.json(quote);
}

export async function generateStaticParams() {
  const paths = quotes.map((_, index) => ({
    id: String(index + 1),
  }));

  return paths;
}
