import { Paper } from '@content';
import { DocumentTextIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import { Heading } from 'src/components/heading/heading';
import Prose from 'src/components/prose/prose';

export default function PaperItem({ title, conference, url, body }: Paper): ReactNode {
  return (
    <article className="space-y-4">
      <div className="space-y-1">
        <Heading className="text-balance" level={3}>
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </Heading>

        <div className="text-neutral-11 flex items-center gap-2 text-lg font-semibold tracking-wide">
          <DocumentTextIcon className="h-4" />
          {conference}
        </div>
      </div>

      <Prose html={body.html} />
    </article>
  );
}
