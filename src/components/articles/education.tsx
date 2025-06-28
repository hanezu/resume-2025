// @ts-nocheck
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { Fragment, ReactNode } from 'react';
import SectionHeading from 'src/components/section-heading/section-heading';

import { EducationExperience } from '@content';
import { sortedEducationExperiences } from 'src/helpers/utilities';
import EducationItem from './education-item';
import Separator from './separator';

export default function Education(): ReactNode {
  return (
    <article className="border-neutral-6 bg-neutral-2 rounded-xl border py-12 shadow-md">
      <div className="container space-y-8">
        <SectionHeading
          className="justify-center"
          Icon={AcademicCapIcon}
          level={2}
          text="Education"
        />

        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {sortedEducationExperiences.map((education: EducationExperience) => (
          <Fragment key={education._id}>
            <EducationItem {...education} />
            <Separator />
          </Fragment>
        ))}
      </div>
    </article>
  );
}
