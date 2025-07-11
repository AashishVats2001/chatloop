import { X } from "lucide-react";
import Image from "next/image";

export default function ExpandedMember({ member, onClose }) {
  return (
    <div className="bg-white border-[1px] border-primary rounded-lg h-full w-full flex flex-col md:flex-row items-center text-center md:text-start px-6 gap-6 relative">
      <Image
        src={member.image}
        alt={member.name}
        width={250}
        height={300}
        className="rounded object-contain"
      />

      <div className=" overflow-auto">
        <h2 className="text-xl font-semibold text-text-dark">{member.name}</h2>
        <p className="text-text-gray font-medium">{member.role}</p>
        <p className="text-primary text-sm mt-2">{member.skills.join(", ")}</p>
        <p className="mt-4 text-sm text-text-gray">{member.bio}</p>
      </div>

      <button
        onClick={onClose}
        className="absolute top-3 right-3 bg-primary text-white rounded-full p-1 cursor-pointer hover:opacity-90 hover:scale-105 transition-all"
      >
        <X size={18} />
      </button>
    </div>
  );
}
