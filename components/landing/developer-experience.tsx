import { Terminal } from "lucide-react";

const codeSnippet = `// Provision a new device via Magistrala SDK
import { Magistrala } from "@magistrala/sdk";

const client = new Magistrala({
  url: "https://cloud.magistrala.absmach.eu",
  token: process.env.MAGISTRALA_TOKEN,
});

async function provisionDevice() {
  const device = await client.things.create({
    name: "industrial-gateway-01",
    tags: ["edge", "temperature", "v1.2"],
    metadata: { location: "factory-floor-A" }
  });

  const channel = await client.channels.create({
    name: "telemetry-stream",
  });

  await client.things.connect(channel.id, [device.id]);
  console.log(\`Device \${device.id} provisioned and connected.\`);
}

provisionDevice();`;

export function DeveloperExperience() {
  return (
    <section className="py-24 bg-muted/30 border-t border-border/40">
      <div className="mx-auto container px-6">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Terminal className="size-4" />
              Developer First
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
              Designed by engineers, <br />
              <span className="text-muted-foreground">for engineers.</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Uncompromising open-source transparency. Magistrala provides a
              comprehensive SDK, well-documented REST & gRPC APIs, and a
              developer-friendly ecosystem to build custom IoT solutions without
              vendor lock-in.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                  Go
                </div>
                <div className="text-sm font-medium leading-none">
                  Core backend <br />
                  <span className="text-muted-foreground font-normal">
                    in robust Go
                  </span>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-border" />
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-[#e34c26]/10 flex items-center justify-center text-[#e34c26] font-bold">
                  SDK
                </div>
                <div className="text-sm font-medium leading-none">
                  Multi-language <br />
                  <span className="text-muted-foreground font-normal">
                    Node, Python, C
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Code Block */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-tr from-primary/30 to-purple-500/30 opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />

            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
              {/* Window Controls Header */}
              <div className="flex items-center px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="size-3 rounded-full bg-slate-700" />
                  <div className="size-3 rounded-full bg-slate-700" />
                  <div className="size-3 rounded-full bg-slate-700" />
                </div>
                <div className="flex-1 text-center text-xs font-mono text-slate-400">
                  provision.ts
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-300">
                  TypeScript
                </div>
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-6 overflow-x-auto">
                <pre className="text-sm sm:text-base font-mono leading-relaxed text-slate-300">
                  <code>
                    <span className="text-slate-500">
                      // Provision a new device via Magistrala SDK
                    </span>
                    <br />
                    <span className="text-purple-400">import</span>{" "}
                    {"{ Magistrala }"}{" "}
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-green-300">"@magistrala/sdk"</span>;
                    <br />
                    <br />
                    <span className="text-purple-400">const</span> client ={" "}
                    <span className="text-blue-400">new</span> Magistrala({"{"}
                    <br />
                    {"  "}url:{" "}
                    <span className="text-green-300">
                      "https://cloud.magistrala.absmach.eu"
                    </span>
                    ,
                    <br />
                    {"  "}token: process.env.MAGISTRALA_TOKEN,
                    <br />
                    {"}"});
                    <br />
                    <br />
                    <span className="text-purple-400">async function</span>{" "}
                    <span className="text-blue-400">provisionDevice</span>(){" "}
                    {"{"}
                    <br />
                    {"  "}
                    <span className="text-purple-400">const</span> device ={" "}
                    <span className="text-purple-400">await</span>{" "}
                    client.things.<span className="text-blue-400">create</span>(
                    {"{"}
                    <br />
                    {"    "}name:{" "}
                    <span className="text-green-300">
                      "industrial-gateway-01"
                    </span>
                    ,
                    <br />
                    {"    "}tags: [
                    <span className="text-green-300">"edge"</span>,{" "}
                    <span className="text-green-300">"temperature"</span>,{" "}
                    <span className="text-green-300">"v1.2"</span>],
                    <br />
                    {"    "}metadata: {"{ location: "}{" "}
                    <span className="text-green-300">"factory-floor-A"</span>{" "}
                    {"}"}
                    <br />
                    {"  }"});
                    <br />
                    <br />
                    {"  "}
                    <span className="text-purple-400">const</span> channel ={" "}
                    <span className="text-purple-400">await</span>{" "}
                    client.channels.
                    <span className="text-blue-400">create</span>({"{"}
                    <br />
                    {"    "}name:{" "}
                    <span className="text-green-300">"telemetry-stream"</span>,
                    <br />
                    {"  }"});
                    <br />
                    <br />
                    {"  "}
                    <span className="text-purple-400">await</span>{" "}
                    client.things.<span className="text-blue-400">connect</span>
                    (channel.id, [device.id]);
                    <br />
                    {"  "}console.<span className="text-blue-400">log</span>(
                    <span className="text-orange-300">
                      `Device ${"{device.id}"} provisioned.`
                    </span>
                    );
                    <br />
                    {"}"}
                    <br />
                    <br />
                    <span className="text-blue-400">provisionDevice</span>();
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
