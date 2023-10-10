import { getAsset } from "@/lib/contentful/setup";
import Image from "next/image";
import fallbackPicture from "@/public/User-avatar.svg";

async function ProfilePicture({
  imageId,
  name,
  size = 128,
}: {
  imageId?: string;
  name: string;
  size?: number;
}) {
  let src = fallbackPicture;

  if (imageId) {
    const image = await getAsset(imageId);
    src = image.fields.file?.url
      ? "https:" + image.fields.file?.url
      : fallbackPicture;
  }

  return (
    <Image
      src={src}
      alt={name}
      className="rounded-full aspect-square object-cover"
      width={size}
      height={size}
    />
  );
}

export default ProfilePicture;
