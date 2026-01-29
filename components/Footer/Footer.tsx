import { createClient } from "@/prismicio";
import FooterClient from "./FooterClient";

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const { data } = footer;

  return <FooterClient data={data} />;
}
