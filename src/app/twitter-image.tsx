import { ImageResponse } from "next/og";

export const alt = "Neumorphic UI";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

const colors = {
  background: "#1a1625",
  foreground: "#e8e0f0",
  primary: "#8b7acc",
  secondary: "#2a2438",
  mutedForeground: "#a89bc0",
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
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 60px",
          borderRadius: "32px",
          background: colors.background,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: colors.secondary,
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: `linear-gradient(135deg, ${colors.primary} 0%, #7c5ce2 100%)`,
            }}
          />
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            background: `linear-gradient(135deg, ${colors.foreground} 0%, ${colors.mutedForeground} 100%)`,
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "16px",
            letterSpacing: "-2px",
          }}
        >
          Neumorphic UI
        </div>

        <div
          style={{
            fontSize: 24,
            color: colors.mutedForeground,
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          A soft, tactile component library for React
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "30px",
          }}
        >
          {["Base UI", "Tailwind CSS", "Dark Mode"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                background: colors.secondary,
                color: colors.primary,
                fontSize: 18,
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
