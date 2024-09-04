import Image from 'next/image';

import { SchoolDetails as SchoolDetailsProps } from '@/lib/types';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const SchoolDetails = ({
  formationName,
  endDate,
  currentlyWorkHere,
  summary,
}: SchoolDetailsProps) => {
  const formattedEndDate = endDate instanceof Date && !isNaN(endDate.getTime())
    ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(endDate)
    : 'NA';

  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
      <div className="flex w-full flex-col gap-1">
        <Typography
          variant="subtitle"
          className="w-full font-semibold text-gray-900"
        >
          {formationName}
        </Typography>
        <Typography>{summary}</Typography>
      </div>
      <Typography className="text-gray-700 md:text-right w-[85px] max-sm:w-full">
        {currentlyWorkHere ? 'Present' : formattedEndDate}
      </Typography>
    </Card>
  );
};

export default SchoolDetails;
