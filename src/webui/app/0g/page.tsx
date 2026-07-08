import Agora from "../_components/Agora";

// The 0G agora on its own route. Pinned to the "0g" instance (no switcher) — the
// deployment still co-hosts several agoras, each now with its own URL.
export const metadata = {
  title: "0G 0Gora — verifiable knowledge about 0G",
  description: "Ask the 0G agora. Every answer is generated and cryptographically verified inside a 0G TEE.",
};

export default function Page() {
  return <Agora pinned="0g" title="0G ØGora" />;
}
