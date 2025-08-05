import { links } from '@config/links';
import { PrivateField, personal } from '@content';
import { IdentificationIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import { Button } from 'src/components/button/button';
import SectionHeading from 'src/components/section-heading/section-heading';

interface ContactInformationProperties {
  privateInformation?: PrivateField[];
}

export default function ContactInformation({
  privateInformation,
}: ContactInformationProperties): ReactNode {
  return (
    <article className="space-y-4">
      <SectionHeading
        Icon={IdentificationIcon}
        level={3}
        text="Contact Information"
      />

      <ul>
        <li>
          <strong>Location:</strong> {personal.location}
        </li>
        <li className="mt-3">
          <div className="flex flex-wrap gap-3 items-center">
            {links.map((link) => (
              <Button
                asChild
                className="h-10 w-10 rounded-full"
                key={link.title}
                size="icon"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">
                    {personal.givenName} on {link.title}
                  </span>
                  <link.icon aria-hidden size={18} />
                </a>
              </Button>
            ))}
          </div>
        </li>

        {/* private access required */}
        {privateInformation?.map((privateField) => (
          <li className="mt-3" key={privateField.label}>
            <strong>{privateField.label}</strong>{' '}
            <div dangerouslySetInnerHTML={{ __html: privateField.body.html }} />
          </li>
        ))}
      </ul>
    </article>
  );
}
