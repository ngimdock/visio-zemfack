import clsx from "clsx";
import { IconAsImage } from "../iconAsImage/iconAsImage";
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
