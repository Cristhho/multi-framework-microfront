import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

export default function QrGenerator() {
  const [qrText] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const key = "text";
    if (urlParams.has(key)) {
      const param = urlParams.get(key);
      return param;
    }
    return "empty";
  });
  const canvas = useRef();

  useEffect(() => {
    if (canvas.current) QRCode.toCanvas(canvas.current, qrText, { width: 300 });
  }, [qrText]);

  return <canvas ref={canvas}></canvas>;
}
