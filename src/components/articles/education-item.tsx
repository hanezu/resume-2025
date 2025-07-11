import { EducationExperience } from '.contentlayer/generated/types';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import { Heading } from 'src/components/heading/heading';
import Prose from 'src/components/prose/prose';

export default function EducationItem ({
    university,
    degree,
    startYear,
    completionYear,
    location,
    body
}: EducationExperience): ReactNode {
    return (
        <article className="space-y-4">
            <div className="space-y-1">
                <Heading className="text-balance" level={3}>
                    {university}
                </Heading>
                <div className="text-neutral-11 flex items-center gap-2 text-lg font-semibold tracking-wide">
                    <AcademicCapIcon className="h-4" />
                    {degree}
                </div>
                <div className="text-neutral-11 text-sm">
                    {startYear}–{completionYear} · {location}
                </div>
            </div>
            <Prose html={body.html} />
        </article>
    )
}
