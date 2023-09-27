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
  if (!imageId) {
    return (
      <Image
        src={fallbackPicture}
        alt={name}
        className="rounded-full"
        width={size}
        height={size}
      />
    );
  }

  const image = await getAsset(imageId);
  const src = image.fields.file?.url ? "https:" + image.fields.file?.url : "";

  return (
    <Image
      src={src}
      alt={name}
      className="rounded-full"
      width={size}
      height={size}
    />
  );
}

export default ProfilePicture;
