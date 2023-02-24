import {exec} from "child_process";
import {promisify} from "util";
import semanticRelease from "semantic-release";

const execAsync = promisify(exec);

const getRcDescriptionAndNewTagWithSemanticRelease = async () => {
    try {
        const result = await semanticRelease({
            plugins: [
                "@semantic-release/release-notes-generator",
                "@semantic-release/git"
                ],
        },
        );

        console.log(result);
        console.log('result.nextRelease', result.nextRelease);
    } catch (error) {
        console.log(error);
    }
}

getRcDescriptionAndNewTagWithSemanticRelease();