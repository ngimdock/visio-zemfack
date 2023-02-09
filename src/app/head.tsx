import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>visio zemfack</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <Script src="https://unpkg.com/peerjs@1.4.7/dist/peerjs.min.js" />
      {/* <script src="https://unpkg.com/peerjs@1.3.2/dist/peerjs.min.js"></script> */}
    </>
  );
}
