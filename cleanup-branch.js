const core = require('@actions/core');
const github = require('@actions/github');
const execSync = require('child_process').execSync;

try {
    const incoming_owner = github.context.payload.pull_request.head.repo.owner.login;
    const incoming_branch = github.context.payload.pull_request.head.ref;
    execSync("cd $GITHUB_WORKSPACE");
    console.log(execSync("git reset --merge", { encoding: 'utf-8' }));
    console.log("git checkout $GITHUB_BASE_REF");
    console.log(execSync("git checkout $GITHUB_BASE_REF", { encoding: 'utf-8' }));
    console.log(`git branch -D ${incoming_owner}-${incoming_branch}`);
    console.log(execSync(`git branch -D ${incoming_owner}-${incoming_branch}`, { encoding: 'utf-8' }));
} catch (error) {
    core.setFailed(error.message);
}
