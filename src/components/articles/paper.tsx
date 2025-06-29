import { DocumentTextIcon } from '@heroicons/react/24/solid';
import { Fragment, ReactNode } from 'react';
import Separator from 'src/components/articles/separator';
import SectionHeading from 'src/components/section-heading/section-heading';
import { sortedPapers } from 'src/helpers/utilities';
import PaperItem from './paper-item';

export default function Papers(): ReactNode {
  return (
    <article className="border-neutral-6 bg-neutral-2 rounded-xl border py-12 shadow-md">
      <div className="container space-y-8">
        <SectionHeading
          className="justify-center"
          Icon={DocumentTextIcon}
          level={2}
          text="Papers"
        />

        {sortedPapers.map((paper) => (
          <Fragment key={paper._id}>
            <PaperItem {...paper} />
            <Separator />
          </Fragment>
        ))}
      </div>
    </article>
  );
}
