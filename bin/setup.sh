#!/bin/bash
set -e

printf '\nLinking git hooks...'
ln -sf "$PWD"/githooks/pre-commit "$PWD"/.git/hooks/pre-commit

# shellcheck disable=SC2181
if [ $? -eq 0 ]
then
  echo 'Successfully linked git hooks!'
else
  echo 'Unable to link git hooks!'
  exit 1
fi

printf '\nRunning bundle install\n'
bundle install
# shellcheck disable=SC2181
if [ $? -eq 0 ]
then
  echo 'Installed all gems!'
  exit 0
else
  echo "Bundle install command failed!"
  exit 1
fi