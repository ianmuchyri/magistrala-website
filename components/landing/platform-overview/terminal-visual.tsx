import { TerminalComponent } from "./terminal";

export function TerminalVisual() {
  return (
    // absolute inset-0 fills the visual container; strip terminal's own chrome
    <div className="absolute inset-0 overflow-hidden bg-[#0c1222] [&>div]:rounded-none [&>div]:border-0 [&>div]:shadow-none">
      <TerminalComponent />
    </div>
  );
}
