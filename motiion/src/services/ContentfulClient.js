import { createClient } from 'contentful'

let currentSpace

function getClient (spaceId, accessToken) {
  return createClient({
    space: spaceId,
    accessToken: accessToken,
    host: 'cdn.contentful.com'
  })
}

function getCurrentSpaceName () {
  let currentSpaceName = (currentSpace && currentSpace.name) ? currentSpace.name : ''
  return currentSpaceName
}

export { getClient, getCurrentSpaceName }
