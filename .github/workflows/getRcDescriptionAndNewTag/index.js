import {exec} from "child_process";
import {promisify} from "util";
import semanticRelease from "semantic-release";

const execAsync = promisify(exec);

const getRcDescriptionAndNewTagWithSemanticRelease = async () => {
    try {
        const result = semanticRelease({
            dryRun: true,
            plugins: [
                "@semantic-release/release-notes-generator",
                "@semantic-release/git"
                ],
        });

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getRcDescriptionAndNewTagWithSemanticRelease();