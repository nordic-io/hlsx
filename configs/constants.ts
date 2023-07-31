import { resolve } from 'path'

const PATH_ALIASES = {
  atoms: 'src/components/atoms',
  components: 'src/components',
  index: 'src',
  providers: 'src/providers',
  utils: 'src/utils'
}

const VITE_RESOLVE_ALIASES = Object.entries(PATH_ALIASES).reduce(
  (aliases, [alias, path]) => {
    aliases[`@${alias}`] = resolve(__dirname, `../${path}`)
    return aliases
  },
  {}
)

const VITE_BUILD_LIB_ENTRIES = Object.entries(PATH_ALIASES).reduce(
  (entryPoints, [alias, path]) => {
    entryPoints[alias] = resolve(__dirname, `../${path}/index.ts`)
    return entryPoints
  },
  {}
)

export { PATH_ALIASES, VITE_BUILD_LIB_ENTRIES, VITE_RESOLVE_ALIASES }
