import logoAsset from "@/assets/tr-black-long-logo-3.svg";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset}
      alt="Munich Tech Sauna"
      className={className}
      style={{ display: "block" }}
    />
  );
}
