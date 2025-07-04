import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Plus } from "lucide-react";

export default function TeamCard({ member, onExpand }) {
  const socialIcons = [
    { icon: faFacebookF, key: "facebook" },
    { icon: faGoogle, key: "google" },
    { icon: faTwitter, key: "twitter" },
    { icon: faInstagram, key: "instagram" },
  ];

  return (
    <div className="border border-border-light p-3 rounded-md overflow-hidden group transition-all duration-300 bg-white" tabIndex={0}>
      <div className="relative border border-border-light rounded-lg hover:border-primary max-md:group-focus:border-primary transition-all duration-500">
        <Image
          src={member.image}
          alt={member.name}
          width={250}
          height={300}
          draggable={false}
          className="w-full h-auto object-fill"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-white flex justify-evenly rounded-b-sm gap-4 py-2 opacity-0 group-hover:opacity-100 max-md:group-focus:opacity-100 transition-all">
          {socialIcons.map(({ icon, key }, i) => (
            <a
              key={i}
              href={member.socials[key]}
              target="_blank"
              rel="noreferrer"
              className="text-white text-sm"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>

        {/* Plus Button */}
        <button
          onClick={onExpand}
          className="absolute top-0 right-0 bg-primary text-white p-1 rounded-bl-sm rounded-tr-sm shadow opacity-0 group-hover:opacity-100 max-md:group-focus:opacity-100 transition-all cursor-pointer"
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
}