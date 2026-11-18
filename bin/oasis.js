#!/usr/bin/env node
import '../universalos.js'

/**
 * Purpose: start `oasis` as a human types it.
 *
 * Intention: the started file of the `oasis` binary; names its Cli model,
 * `oasis.jsonld` beside it, which the Universal OS restores and starts with
 * every word after this file as the human's — or, where the first word is
 * an oasis IRI, `open.jsonld`, the Oasis that opens what it names.
 */
export default new URL(process.argv[2]?.startsWith('oasis://') ? './open.jsonld' : './oasis.jsonld', import.meta.url)
