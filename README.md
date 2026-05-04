# tytus-app-text-editor

Plain-text editor for [Tytus OS](https://github.com/traylinx/tytus-os) — installable via the App Store.

Multi-file tabs, search/replace, word-wrap, font-size controls, and the standard `host.fs` integration so files open and save through the user's VFS.

## Install

Inside Tytus OS, install via the App Store. The shell pins to a tagged commit and dynamic-imports `dist/index.js` from jsDelivr.

## Develop

```bash
npm install
npm run typecheck
npm run build
```

The built `dist/index.js` is committed and shipped on the `v*` tag — jsDelivr serves it directly.

## How it works

This is an **external Tytus app** following the build contract in [`packages/host-api/EXTERNAL_APP_BUILD.md`](https://github.com/traylinx/tytus-os/blob/main/packages/host-api/EXTERNAL_APP_BUILD.md):

- Default export is `bootApp(env): Component`.
- React, ReactDOM, `react/jsx-runtime`, and `@tytus/host-api` are externalised — the host's importmap shim hands the app the same singletons the shell already loaded.
- `lucide-react` is bundled inside `dist/index.js` (the host does not externalise it).

## License

MIT — see [LICENSE](./LICENSE).
