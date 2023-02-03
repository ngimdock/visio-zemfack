type Message = {
  id: number;
  text: string;
};
export const UNPAID_INVOICE_MESSAGES: Message[] = [
  {
    id: 1,
    text: "The customer has a 150$/yr subscription and fines it way too expensive for his current use of the application.",
  },

  {
    id: 2,
    text: "The invoice has been sent on Oct 14, 2021 and his subscription reneval will happen on Oct 14, 2022",
  },
];
