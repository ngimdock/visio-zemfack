import { Badge } from "@/components/badge/badge";
import { BrowseFile } from "@/components/browse-file/browse-file";
import { IconAsImage } from "@/components/icon-as-image/icon-as-image";
import { P } from "@/components/p/p";
import { UNPAID_INVOICE_MESSAGES } from "@/mockDatas/unpaid-invoice-messages";
import { link } from "fs";

export const Note = () => {
  const BILL_DATA = ["unpaid bills", "unpaid bills", "unpaid bills"];

  return (
    <section>
      <div className="flex items-center space-x-0.5">
        <IconAsImage
          alt="back"
          image="arow-back.svg"
          title="back"
          iconSize="w-2.5"
        />
        <P color="custom-gray" size="xx">
          10th December
        </P>
      </div>

      <div className="mt-2 space-x-1 md:mt-1">
        {BILL_DATA.map((billData: string, index: number) => (
          <Badge
            background="gray"
            key={index}
            size="sm"
            classe=" text-custom-indigo text-bold bg-custom-indigo/10"
          >
            {"# " + billData}
          </Badge>
        ))}
      </div>

      <div className="mt-5 md:mt-3.5">
        <Badge classe="rounded-xl float-left bg-custom-gray  mr-0.5">
          @Antoine
        </Badge>
        <P color="custom-gray" classe="italic">
          calls a customer to regarding his unpaid
        </P>
      </div>

      <div className="mt-6 md:mt-5 space-y-7 md:space-y-5">
        <div className="flex flex-col w-full ">
          <P classe="font-bold">Unpaid Invoice</P>
          <ul className="mt-2 space-y-2">
            {UNPAID_INVOICE_MESSAGES.map((message) => (
              <Li text={message.text} key={message.id} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col w-full">
          <P classe="font-bold">Subscription Downshell</P>
          <ul className="mt-2 space-y-2">
            {UNPAID_INVOICE_MESSAGES.map((message) => (
              <Li text={message.text} key={message.id} />
            ))}
          </ul>
        </div>

        <BrowseFile text="lorem ipsum pdf presentation" />
      </div>
    </section>
  );
};

function Li({ text }: { text: string }) {
  return (
    <li className="flex items-start space-x-1.5">
      <span className="w-1 h-1 rounded-full bg-custom-white shrink-0 translate-y-0.5"></span>
      <P color="custom-white" size="xx">
        {text}
      </P>
    </li>
  );
}
