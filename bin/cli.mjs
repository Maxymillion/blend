#!/usr/bin/env node

import {Command} from "commander";
import {createRequire} from "module";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");

run().catch(err => {
    console.error(err);

    process.exitCode = process.exitCode || 1;
    process.exit();
});

/**
 * Run the program.
 */
async function run() {
    const prog = new Command();

    prog.name("blend");
    prog.version(pkg.version);
    prog.option(
        "--recipe <path>",
        "The path to your blend configuration file.",
        "my.recipe"
    );

    prog
        .command("watch")
        .description("Build and watch files for changes")
        .option("--hot", "Enable hot reloading", false)
        .action((opts, cmd) =>
                console.log("Run Watch!")
            // executeScript('watch', {...program.opts(), ...opts}, cmd.args)
        );

    prog
        .command("recipe")
        .description("Interactively create/edit a recipe")
        .action((opts, cmd) =>
                console.log("Run Recipe Creator!")
            // executeScript('watch', {...program.opts(), ...opts}, cmd.args)
        );

    prog
        .command("build", {isDefault: true})
        .description("Build Blend using recipe")
        .option("-p, --production", "Run Blend in production mode", false)
        .action((opts, cmd) =>
                console.log("Run Build!")
            // executeScript('build', {...program.opts(), ...opts}, cmd.args)
        );

    await prog.parseAsync(process.argv);
}
