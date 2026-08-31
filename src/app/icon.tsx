import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1815",
          borderRadius: 14,
        }}
      >
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 11L12 3L21 11"
            stroke="#f2660c"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 9.5V20H18V9.5"
            stroke="#f2660c"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 20V14H14.5V20"
            stroke="#f2660c"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
