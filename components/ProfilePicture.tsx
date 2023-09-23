import { getAsset } from "@/lib/contentful/setup";
import Image from "next/image";

async function ProfilePicture({
  imageId,
  name,
  size = 128,
}: {
  imageId: string;
  name: string;
  size?: number;
}) {
  const image = await getAsset(imageId);

  if (!image.fields.file?.url) {
    return null;
  }
  return (
    <Image
      src={"https:" + image.fields.file?.url}
      alt={name}
      className="rounded-full"
      width={size}
      height={size}
    />
  );
}

export default ProfilePicture;
