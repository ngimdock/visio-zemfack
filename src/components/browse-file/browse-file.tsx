import clsx from "clsx";
import { IconAsImage } from "../icon-as-image/icon-as-image";
import { P } from "../p/p";

type BrowseFileType = {
  text: string;
  classse?: string;
};

export const BrowseFile = ({ text, classse }: BrowseFileType) => {
  return (
    <div
      className={clsx(
        classse,
        "flex items-center space-x-2 border border-custom-indigo/30 p-1 rounded"
      )}
    >
      <IconAsImage alt="folder" image="folder.svg" />
      <P color="custom-gray" classe="italic">
        {text}
      </P>
    </div>
  );
};
