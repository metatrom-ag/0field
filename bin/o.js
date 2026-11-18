#!/usr/bin/env node
import '../universalos.js'

/**
 * Purpose: start `o` as a human types it.
 *
 * Intention: the started file of the `o` binary; names its Cli model,
 * `o.jsonld` beside it, which the Universal OS restores and starts with
 * every word after this file as the human's — or, where the first word is
 * an oasis IRI, `open.jsonld`, the Oasis that opens what it names.
 */
export default new URL(process.argv[2]?.startsWith('oasis://') ? './open.jsonld' : './o.jsonld', import.meta.url)
