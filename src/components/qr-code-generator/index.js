import React, { useState } from "react";
import QRCode from "react-qr-code";

function QrCodeGenerator() {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput] = useState("");

  function handleGeneratorQrCode() {
    setQrcode(input);
    setInput("");
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="enetr your value here"
        />
        <button
          disabled={input == "" ? true : false}
          onClick={handleGeneratorQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrcode} />
      </div>
    </div>
  );
}

export default QrCodeGenerator;
