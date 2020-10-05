const DELIM = ' :: ';
const SEARCH_PREFIX = 'Q-PR';
const STATUS = {
  ALREADY_CLOSED: 'ALREADY_CLOSED',
  TRIGGER_NOT_FOUND: 'TRIGGER_NOT_FOUND',
  ALREADY_QUEUED: 'ALREADY_QUEUED',
  ADDED_TO_QUEUE: 'ADDED_TO_QUEUE',
  NOT_FOUND: 'NOT_FOUND',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
};
const Q_STATUS = {
  MERGING: 'MERGING',
  MERGED: 'MERGED',
  CANCELLED: 'CANCELLED',
};

module.exports = {
  DELIM,
  SEARCH_PREFIX,
  STATUS,
  Q_STATUS,
};