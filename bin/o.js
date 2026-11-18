#!/usr/bin/env node
import '../universalos.js'

/**
 * Purpose: start `o` as a human types it.
 *
 * Intention: the started file of the `o` binary; names its Cli model,
 * `o.jsonld` beside it, which the Universal OS restores and starts with
 * every word after this file as the human's.
 */
export default new URL('./o.jsonld', import.meta.url)
