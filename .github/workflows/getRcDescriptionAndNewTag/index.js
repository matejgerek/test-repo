import {exec} from "child_process";
import {promisify} from "util";
import semanticRelease from "semantic-release";

const execAsync = promisify(exec);

const getRcDescriptionAndNewTagWithSemanticRelease = async () => {
    try {
        const result = semanticRelease({
            dryRun: true,
            plugins: [
                "@semantic-release/commit-analyzer",
                "@semantic-release/release-notes-generator",
                ],
        });

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getRcDescriptionAndNewTagWithSemanticRelease();