// The ZAFClient is imported within the index.html file.
let client

if (typeof ZAFClient === 'undefined') {
  throw new Error('ZAFClient cannot run outside Zendesk')
} else {
  // eslint-disable-next-line no-undef
  client = ZAFClient.init()
}

export default client
