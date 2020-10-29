# Merge Test Branch action

This action is intended to be used as part of a `pull_request_target` workflow. It updates the checked-out repository to create a new branch and merge the incoming branch.

At the end of the workflow, the test branch is deleted automatically.

## Inputs

### `path`

An optional parameter, this specifies a path relative to `$GITHUB_WORKSPACE` where the repository can be found.

## Example usage

```yaml
uses: linaro-its/merge-test-branch@v2
with:
    path: website
```
