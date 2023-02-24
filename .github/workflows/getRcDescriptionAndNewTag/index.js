import {exec} from "child_process";
import {promisify} from "util";

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