import esbuild from "esbuild";

await esbuild
	.build({
		bundle: true,
		entryPoints: ["src/index.ts"],
		outfile: "build/server.js",
		platform: "node",
		packages: "external",
		logLevel: "info",
	})
	.catch(() => {
		process.exit(1);
	});
