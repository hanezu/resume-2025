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
    courseworks,
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
            {courseworks && courseworks.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-neutral-11 text-sm font-semibold">Courseworks:</span>
                    {courseworks.map((cw) => (
                            <span
                                key={cw}
                                className="inline-flex items-center px-3 py-1 text-xs font-medium bg-neutral-4 text-neutral-12 rounded-full border transition-colors hover:bg-neutral-4"
                            >
                                {cw}
                            </span>
                    ))}
                </div>
            )}
        </article>
    )
}
