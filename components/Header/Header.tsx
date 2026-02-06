import { createClient } from "@/prismicio";
import HeaderClient from "@/components/Header/HeaderClient";

export default async function Header() {
  const client = createClient();
  const navigation = await client.getSingle("navigation");
  const additionalData = await client.getSingle("footer")

  return (
    <div>
      <HeaderClient navigation={navigation} additionalData={additionalData}  />
    </div>
  );
}
