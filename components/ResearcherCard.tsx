import { Link } from "@/i18n";
import ProfilePicture from "./ProfilePicture";

export default function ResearcherCard({
  name,
  imageId,
  href,
}: {
  name: string;
  imageId?: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="flex justify-evenly flex-col items-center flex-grow-0 flex-shrink rounded bg-slate-100 hover:shadow hover:bg-slate-50 transition-all p-4">
        <ProfilePicture imageId={imageId} name={name} />
        <h3 className=" font-semibold text-center text-sm">{name}</h3>
      </div>
    </Link>
  );
}
