// ...existing imports...
import { DocumentTextIcon } from '@heroicons/react/24/solid';
import { Fragment, ReactNode } from 'react';
import { Heading } from 'src/components/heading/heading';
import Prose from 'src/components/prose/prose';

export default function PaperItem({
  title,
  conference,
  url,
  authors,
  body,
}: {
  title: string;
  conference: string;
  url?: string;
  authors: string[];
  body: { html: string };
}): ReactNode {
  return (
    <article className="space-y-4">
      <div className="space-y-1">
        <div className="text-neutral-11 flex items-center gap-2 text-lg font-semibold tracking-wide">
          <DocumentTextIcon className="h-4" />
          {conference}
        </div>
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

        {/* authors list */}
        <div className="text-neutral-11 text-base font-medium tracking-wide">
          {authors.map((author, index) => (
            <Fragment key={`${author}-${index.toString()}`}>  
              {author === 'Huachun Zhu' ? <strong>{author}</strong> : author}
              {index < authors.length - 1 ? ', ' : ''}
            </Fragment>
          ))}
        </div>
      </div>

      <Prose html={body.html} />
    </article>
  );
}
