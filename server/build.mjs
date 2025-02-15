import { build, context } from "esbuild";

const isWatching = process.argv.includes("--watch");

const options = {
	bundle: true,
	entryPoints: ["src/index.ts"],
	outfile: "build/server.js",
	platform: "node",
	packages: "external",
	logLevel: "info",
};

if (isWatching) {
	const ctx = await context(options);
	await ctx.watch();
} else {
	await build(options);
}
