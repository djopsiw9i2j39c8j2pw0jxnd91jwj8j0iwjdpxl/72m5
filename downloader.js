const simpleGit = require("simple-git");
const fs = require("fs");

const git = simpleGit();

const REPO =
  "https://github.com/tupsutumppu/MoonsecDeobfuscator.git";

async function updateRepo() {
  try {
    if (!fs.existsSync("./logic")) {
      console.log("Cloning repo...");
      await git.clone(REPO, "./logic");
    } else {
      console.log("Updating repo...");
      await git.cwd("./logic");
      await git.pull();
    }

    console.log("Done.");
  } catch (err) {
    console.log(err);
  }
}

module.exports = updateRepo;