import { ArticlesListing } from "@/components/article/articles-listing";
import { HeadingParagraph } from "@/components/heading--paragraph";


export function ParagraphMediaTextGroup({
  paragraph,
}: {
  paragraph: any;
}) {
    console.log(paragraph);
  return (
    <>
      {paragraph.paragraphListingArticleHeading && (
        <HeadingParagraph>
          {paragraph.paragraphListingArticleHeading}
        </HeadingParagraph>
      )}
      <ArticlesListing listingId={paragraph.id} limit={paragraph.limit} />
    </>
  );
}
