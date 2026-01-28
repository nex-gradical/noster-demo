import { createClient } from "@/prismicio";
import HeaderClient from "@/components/HeaderClient";

export default async function Header() {
  const client = createClient();
  const navigation = await client.getSingle("navigation");

  return <HeaderClient navigation={navigation} />;
}
