import { ParagraphAccordionOneColumn } from "@/components/Paragraph/paragraph--accordion--one-column";
import { ParagraphAccordionTwoColumns } from "@/components/Paragraph/paragraph--accordion--two-columns";
import type { FragmentParagraphAccordionFragment } from "@/lib/gql/graphql";

export function ParagraphAccordion({
  paragraph,
}: {
  paragraph: FragmentParagraphAccordionFragment;
}) {
  switch (paragraph.accordionLayout) {
    case "one_column": {
      return <ParagraphAccordionOneColumn paragraph={paragraph} />;
    }
    case "two_columns": {
      return <ParagraphAccordionTwoColumns paragraph={paragraph} />;
    }

    default:
      return null;
  }
}
