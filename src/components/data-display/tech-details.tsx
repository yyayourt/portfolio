'use client';

import { TechDetails as TechDetailsType } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Image from 'next/image';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetailsType) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link noCustomization href={url} externalLink>
        <div className="relative w-12 h-12"> {/* Parent container with fixed width and height */}
          <Image
            src={logo}
            alt={label}
            layout="fill" // Ensures the image fills the container while maintaining aspect ratio
            objectFit="contain" // Scales the image to fit within the container without cropping
            className="transition-transform duration-300 md:hover:scale-110"
          />
        </div>
      </Link>
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default TechDetails;
