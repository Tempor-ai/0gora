import Agora from "../_components/Agora";

// The ERC-8226 agora on its own route. Pinned to the "erc-8226" instance (no switcher);
// the wrapper carries data-agora="erc-8226", which the CSS uses to recolor the hero to
// the Brickken (ERC-8226 authors') palette — the only visual difference from /0g.
export const metadata = {
  title: "ERC-8226 0Gora — verifiable forum for the Regulated Agent Mandate",
  description: "Ask the ERC-8226 agora. Every answer is generated and cryptographically verified inside a 0G TEE.",
};

export default function Page() {
  return <Agora pinned="erc-8226" title="ERC-8226 ØGora" />;
}
