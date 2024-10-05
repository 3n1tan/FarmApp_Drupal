import { FragmentParagraphHeroBannerFragment } from "@/lib/gql/graphql";
import Image from "next/image";

export function ParagraphHeroBanner({
    paragraph,
  }: {
    paragraph: FragmentParagraphHeroBannerFragment;
  }) {
    const { image } = paragraph;
    return (
      <>
        <div className="relative lg:h-[30rem] h-[12rem]">
            {
                image && (
                    <Image 
                        src={image.mediaImage.url}
                        alt={image.mediaImage.alt}
                        width={0}
                        height={0}
                        layout="fill"
                        sizes="100vw"
                        className="object-cover object-[top_left_30rem] w-full lg:pb-9 pb-4"
                    />
                )
            }
        </div>
      </>
    );
  }