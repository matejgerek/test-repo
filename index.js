import semanticRelease from "semantic-release";

const run = async () => {
    const result = await semanticRelease(
        {
            dryRun: true,
            plugins: [

                "@semantic-release/release-notes-generator"
            ],
            // Core options
            branches: [
                "main",
                "staging",
            ],
            repositoryUrl: "https://github.com/matejgerek/test-repo.git"
        },
        {
            /*env: { ...process.env, MY_ENV_VAR: "MY_ENV_VAR_VALUE" },*/
        }
    )

    console.log(result)
    console.log('staging')
}

run()