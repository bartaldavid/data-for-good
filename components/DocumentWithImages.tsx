import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, type Document } from "@contentful/rich-text-types";
import Image from "next/image";

function DocumentWithImages({
  document,
  options,
}: {
  document?: Document;
  options?: Options;
}) {
  if (!document) return null;
  return documentToReactComponents(document, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          width={node.data.target.fields.file.details.image.width}
          height={node.data.target.fields.file.details.image.height}
          alt={node.data.target.fields.description}
        />
      ),
    },
    ...options,
  });
}

export default DocumentWithImages;
