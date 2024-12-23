import esbuild from "esbuild";

await esbuild
    .build({
        bundle: true,
        entryPoints: ["src/index.ts"],
        outfile: "build/server.js",
        platform: "node",
        packages: "external",
    })
    .catch(() => {
        process.exit(1);
    });
