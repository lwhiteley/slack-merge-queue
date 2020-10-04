const core = require('@actions/core');
const github = require('@actions/github');
const get = require('lodash/get');
const { WebClient } = require('@slack/web-api');

const { setActionStatus } = require('./helpers');
const modes = require('./modes');
const { STATUS } = require('./consts');

const token = process.env.SLACK_TOKEN;
const client = new WebClient(token);

(async function main() {
  const modeName = core.getInput('mode');
  const payload = get(github, 'context.payload', {});
  const mode = modes[modeName];

  if (!mode) {
    setActionStatus(STATUS.FAILURE);
    return core.setFailed('mode not recognised');
  }

  core.info(`mode: ${modeName}\n`);

  try {
    await mode({ client, payload });
  } catch (error) {
    setActionStatus(STATUS.FAILURE);
    core.setFailed(error.message);
  }
})();
