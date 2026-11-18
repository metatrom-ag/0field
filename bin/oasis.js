#!/usr/bin/env node
import '../universalos.js'

/**
 * Purpose: start `oasis` as a human types it.
 *
 * Intention: the started file of the `oasis` binary; names its Cli model,
 * `oasis.jsonld` beside it, which the Universal OS restores and starts with
 * every word after this file as the human's.
 */
export default new URL('./oasis.jsonld', import.meta.url)
