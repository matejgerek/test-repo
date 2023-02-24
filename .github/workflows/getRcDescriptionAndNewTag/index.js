const { exec } = require("child_process");
const { promisify } = require("util");
const execAsync = promisify(exec);

const getRcDescriptionAndNewTagWithSemanticRelease = async () => {
    try {
        const { stdout } = await execAsync("npx semantic-release");
        console.log(stdout);
    } catch (error) {
        console.log(error);
    }
}

getRcDescriptionAndNewTagWithSemanticRelease();