import { EducationExperience } from '.contentlayer/generated/types'
import { ReactNode } from 'react'
import { Heading } from 'src/components/heading/heading'
import Prose from 'src/components/prose/prose'

export default function EducationItem({
    university,
    body,
}: EducationExperience): ReactNode {
    return (
        <article className="space-y-4">
            <Heading className="text-balance" level={3}>
                {university}
            </Heading>
            <Prose html={body.html} />
        </article>
    )
}
