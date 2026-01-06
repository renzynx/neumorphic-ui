import { ImageResponse } from "next/og";

export const alt = "Neumorphic UI";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const colors = {
  background: "#1a1625",
  foreground: "#e8e0f0",
  primary: "#8b7acc",
  secondary: "#2a2438",
  mutedForeground: "#a89bc0",
  surfaceShadow: "#0d0a14",
  surfaceHighlight: "#2a2438",
};

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 40,
        background: `linear-gradient(135deg, ${colors.background} 0%, ${colors.secondary} 100%)`,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px",
          borderRadius: "32px",
          background: colors.background,
          boxShadow: `20px 20px 60px ${colors.surfaceShadow}, -20px -20px 60px ${colors.surfaceHighlight}, inset 1px 1px 0px rgba(255,255,255,0.05)`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            borderRadius: "24px",
            background: colors.background,
            boxShadow: `8px 8px 24px ${colors.surfaceShadow}, -8px -8px 24px ${colors.surfaceHighlight}, inset 1px 1px 0px rgba(255,255,255,0.05)`,
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              background: `linear-gradient(135deg, ${colors.primary} 0%, #7c5ce2 100%)`,
            }}
          />
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            background: `linear-gradient(135deg, ${colors.foreground} 0%, ${colors.mutedForeground} 100%)`,
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "20px",
            letterSpacing: "-2px",
          }}
        >
          Neumorphic UI
        </div>

        <div
          style={{
            fontSize: 28,
            color: colors.mutedForeground,
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          A soft, tactile component library for React
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          {["Base UI", "Tailwind CSS", "Dark Mode"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "12px 24px",
                borderRadius: "12px",
                background: colors.secondary,
                color: colors.primary,
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
