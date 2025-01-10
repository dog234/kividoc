import md5 from 'spark-md5'

import { blockAuthors, blockPlugins } from './block'
import { niceAuthors, nicePlugins } from './nice'

export function getName(pkg: any) {
  if (typeof pkg.author === 'string' && pkg.author) {
    return pkg.author
  } else {
    return pkg.author?.name || pkg.publisher.username
  }
}

export function isOfficial(pkg: any) {
  return ['dogxi'].includes(pkg.publisher.username)
}

export function isHighQuality(pkg: any) {
  const isHQAuthor = niceAuthors.includes(pkg.publisher.username)
  const isHQPlugin = nicePlugins.includes(pkg.name.replace('pupbot-plugin-', ''))

  return isHQAuthor || isHQPlugin
}

export function getAvatar(email: string) {
  if (!email) {
    return 'http://www.pupbot.cn/logo.png'
  }

  return `https://gravatar.deno.dev/avatar/${md5.hash(email)}?d=mp`
}

export function isBlackAuthor(pkg: any) {
  return blockAuthors.includes(pkg.publisher.username)
}

export function isBlackPlugin(pkg: any) {
  return blockPlugins.includes(pkg.name.replace('pupbot-plugin-', ''))
}

export function isBlack(pkg: any) {
  const isKiviPlugin = pkg.name.startsWith('pupbot-plugin-')
  return !isKiviPlugin || isBlackAuthor(pkg) || isBlackPlugin(pkg)
}
