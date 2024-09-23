import { Paragraph } from "@/components/Paragraph";
import { FragmentParagraphUnionFragment } from "@/lib/gql/graphql";
import type { FrontpageType } from "@/types/graphql";

export function NodeFrontpage({ page }: { page: FrontpageType }) {
  console.log(page);
  return (
    <div className="grid gap-4">
      {page.contentElements?.map(
        (paragraph: FragmentParagraphUnionFragment) => (
          <Paragraph key={paragraph.id} paragraph={paragraph} />
        ),
      )}
    </div>
  );
}
