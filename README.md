# Merge Test Branch action

This action is intended to be used as part of a `pull_request_target` workflow. It updates the checked-out repository to create a new branch and merge the incoming branch.

At the end of the workflow, the test branch is deleted automatically.

There are no inputs or outputs. All configuration is taken from the pull request data.
