import { jsx as r, jsxs as l } from "react/jsx-runtime";
import { forwardRef as ce, createElement as Z, useCallback as g, useRef as I, useState as f, useMemo as ne, useEffect as D } from "react";
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ce = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (o, y, p) => p ? p.toUpperCase() : y.toLowerCase()
), oe = (n) => {
  const o = Ce(n);
  return o.charAt(0).toUpperCase() + o.slice(1);
}, ie = (...n) => n.filter((o, y, p) => !!o && o.trim() !== "" && p.indexOf(o) === y).join(" ").trim(), _e = (n) => {
  for (const o in n)
    if (o.startsWith("aria-") || o === "role" || o === "title")
      return !0;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Me = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ze = ce(
  ({
    color: n = "currentColor",
    size: o = 24,
    strokeWidth: y = 2,
    absoluteStrokeWidth: p,
    className: _ = "",
    children: x,
    iconNode: u,
    ...b
  }, v) => Z(
    "svg",
    {
      ref: v,
      ...Me,
      width: o,
      height: o,
      stroke: n,
      strokeWidth: p ? Number(y) * 24 / Number(o) : y,
      className: ie("lucide", _),
      ...!x && !_e(b) && { "aria-hidden": "true" },
      ...b
    },
    [
      ...u.map(([z, w]) => Z(z, w)),
      ...Array.isArray(x) ? x : [x]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c = (n, o) => {
  const y = ce(
    ({ className: p, ..._ }, x) => Z(ze, {
      ref: x,
      iconNode: o,
      className: ie(
        `lucide-${Ne(oe(n))}`,
        `lucide-${n}`,
        p
      ),
      ..._
    })
  );
  return y.displayName = oe(n), y;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Fe = c("chevron-down", $e);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Se = c("chevron-left", je);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ae = c("chevron-right", Le);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Ie = c("chevron-up", Te);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
], Ee = c("code-xml", De);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = [
  ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
  ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]
], Re = c("code", Oe);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
], Ve = c("file-braces", He);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 12.5 8 15l2 2.5", key: "1tg20x" }],
  ["path", { d: "m14 12.5 2 2.5-2 2.5", key: "yinavb" }]
], Ke = c("file-code", Be);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = [
  [
    "path",
    {
      d: "M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343",
      key: "1vfytu"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    {
      d: "M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0",
      key: "1etmh7"
    }
  ]
], Ue = c("file-headphone", We);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pe = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["circle", { cx: "10", cy: "12", r: "2", key: "737tya" }],
  ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22", key: "wt3hpn" }]
], qe = c("file-image", Pe);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    {
      d: "M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z",
      key: "1tzo1f"
    }
  ]
], Ze = c("file-play", Je);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
], Ge = c("file-spreadsheet", Xe);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], le = c("file-text", Qe);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M11 18h2", key: "12mj7e" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5", key: "qbrxap" }]
], et = c("file-type", Ye);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tt = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], de = c("file", tt);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], pe = c("folder-open", rt);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], nt = c("folder", at);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], st = c("hash", ot);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], it = c("image", ct);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], dt = c("music", lt);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], he = c("plus", pt);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ht = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], me = c("save", ht);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], X = c("search", mt);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], xt = c("settings", yt);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = [
  ["path", { d: "m16 16-3 3 3 3", key: "117b85" }],
  ["path", { d: "M3 12h14.5a1 1 0 0 1 0 7H13", key: "18xa6z" }],
  ["path", { d: "M3 19h6", key: "1ygdsz" }],
  ["path", { d: "M3 5h18", key: "1u36vt" }]
], vt = c("text-wrap", ut);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ft = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], gt = c("video", ft);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], E = c("x", bt);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kt = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], wt = c("zoom-in", kt);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nt = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ct = c("zoom-out", Nt), _t = {
  File: de,
  FileText: le,
  FileCode: Ke,
  FileImage: qe,
  FileVideo: Ze,
  FileAudio: Ue,
  FileSpreadsheet: Ge,
  FileJson: Ve,
  FileType: et,
  Folder: nt,
  FolderOpen: pe,
  Image: it,
  Music: dt,
  Video: gt,
  Code: Re,
  Code2: Ee,
  ChevronLeft: Se,
  ChevronRight: Ae,
  ChevronDown: Fe,
  ChevronUp: Ie,
  Save: me,
  Plus: he,
  X: E,
  Search: X,
  Settings: xt
}, J = {
  js: [
    { pattern: /\/\/.*$/gm, color: "var(--syntax-comment)" },
    { pattern: /\/\*[\s\S]*?\*\//g, color: "var(--syntax-comment)" },
    { pattern: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, color: "var(--syntax-string)" },
    { pattern: /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|new|this|try|catch|throw|typeof|instanceof)\b/g, color: "var(--syntax-tag)" },
    { pattern: /\b(true|false|null|undefined)\b/g, color: "var(--syntax-tag)" },
    { pattern: /\b\d+(?:\.\d+)?\b/g, color: "var(--syntax-number)" }
  ],
  ts: [
    { pattern: /\/\/.*$/gm, color: "var(--syntax-comment)" },
    { pattern: /\/\*[\s\S]*?\*\//g, color: "var(--syntax-comment)" },
    { pattern: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, color: "var(--syntax-string)" },
    { pattern: /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|new|this|try|catch|interface|type|extends|implements|readonly)\b/g, color: "var(--syntax-tag)" },
    { pattern: /\b(string|number|boolean|any|void|null|undefined|true|false)\b/g, color: "var(--syntax-type)" },
    { pattern: /\b\d+(?:\.\d+)?\b/g, color: "var(--syntax-number)" }
  ],
  json: [
    { pattern: /"(?:[^"\\]|\\.)*"(?=\s*:)/g, color: "var(--syntax-json-key)" },
    { pattern: /"(?:[^"\\]|\\.)*"/g, color: "var(--syntax-json-string)" },
    { pattern: /\b(true|false|null)\b/g, color: "var(--syntax-json-bool)" },
    { pattern: /\b\d+(?:\.\d+)?\b/g, color: "var(--syntax-json-number)" }
  ],
  md: [
    { pattern: /^#{1,6}\s+.*/gm, color: "var(--syntax-tag)" },
    { pattern: /\*\*(?:[^*]+)\*\*/g, color: "var(--syntax-string)" },
    { pattern: /`[^`]+`/g, color: "var(--syntax-function)" },
    { pattern: /^\s*[-*+]\s+/gm, color: "var(--syntax-variable)" },
    { pattern: /^\s*\d+\.\s+/gm, color: "var(--syntax-variable)" }
  ]
}, Mt = ["documents", "desktop", "downloads"], zt = {
  documents: "Documents",
  desktop: "Desktop",
  downloads: "Downloads",
  music: "Music",
  pictures: "Pictures"
}, $t = (n) => {
  const o = n.slice(n.lastIndexOf(".")).toLowerCase();
  return o === ".js" || o === ".jsx" ? "js" : o === ".ts" || o === ".tsx" ? "ts" : o === ".json" ? "json" : o === ".md" ? "md" : "";
}, se = (n, o) => {
  if (o?.startsWith("text/") || o && (o === "application/json" || o === "application/xml" || o === "application/javascript")) return !0;
  const y = n.toLowerCase();
  return /\.(txt|md|markdown|json|xml|csv|tsv|js|jsx|ts|tsx|css|scss|html|htm|py|rb|go|rs|java|c|cpp|h|sh|yml|yaml|toml|ini|env|log)$/.test(y);
};
function Ft({ host: n }) {
  const o = g(
    ({ name: e, ...t }) => {
      const a = n.fs.getIconForFileName(e), d = _t[a];
      return d ? /* @__PURE__ */ r(d, { ...t }) : /* @__PURE__ */ r(de, { ...t });
    },
    [n]
  ), p = n.windows.current.args?.editor, _ = I(!1), [x, u] = f([]), [b, v] = f(null), [z, w] = f(!1), [O, R] = f(!1), [H, ye] = f(""), [C, G] = f(13), [F, xe] = f(!0), [V, ue] = f(!0), [M, ve] = f(() => {
    try {
      return JSON.parse(localStorage.getItem("texteditor_recent") || "[]");
    } catch {
      return [];
    }
  }), [j, fe] = f([]), [Q, Y] = f(null), ee = I(null), B = I(null), K = I(null), s = x.find((e) => e.id === b) || null, te = ne(() => s ? s.content.split(`
`) : [], [s]), W = s ? $t(s.name) : "", N = g((e, t = 2e3) => {
    Y(e), setTimeout(() => Y(null), t);
  }, []), S = g((e) => {
    ve(e);
    try {
      localStorage.setItem("texteditor_recent", JSON.stringify(e));
    } catch {
    }
  }, []), L = g(() => {
    const e = "new-" + Date.now(), t = { id: e, name: "Untitled.txt", content: "", isModified: !1, cursorLine: 1, cursorCol: 1 };
    u((a) => [...a, t]), v(e);
  }, []), A = g(async () => {
    const e = [];
    for (const t of Mt)
      try {
        const a = await n.fs.ensureUserFolder(t), d = await n.fs.list(a);
        for (const i of d)
          i.isDirectory || i.refTrackId || i.refVoiceRecordingId || se(i.name, i.mimeType) && e.push({ id: i.id, name: i.name, mimeType: i.mimeType, folder: t });
      } catch {
      }
    fe(e);
  }, [n]), re = g(async (e) => {
    if (x.find((a) => a.id === e)) {
      v(e), w(!1);
      return;
    }
    try {
      const a = await n.fs.getNodeById(e);
      if (!a || a.isDirectory) {
        N("File not found");
        return;
      }
      if (a.refTrackId || a.refVoiceRecordingId) return;
      if (!se(a.name, a.mimeType)) {
        N(`Not a text file: ${a.name}`, 2500);
        return;
      }
      const d = await n.fs.read(e), i = typeof d == "string" ? d : new TextDecoder().decode(d), k = { id: e, name: a.name, content: i, isModified: !1, cursorLine: 1, cursorCol: 1 };
      u((h) => [...h, k]), v(e), w(!1);
      const m = [e, ...M.filter((h) => h !== e)].slice(0, 10);
      S(m);
    } catch (a) {
      N(`Open failed: ${a.message}`, 3e3);
    }
  }, [x, n, M, S, N]), U = g(async () => {
    if (s)
      try {
        if (s.id.startsWith("new-")) {
          const e = await n.fs.ensureUserFolder("documents"), t = await n.fs.createFile(
            e,
            s.name,
            s.content,
            { mimeType: "text/plain" }
          );
          u((d) => d.map((i) => i.id === s.id ? { ...i, id: t, isModified: !1 } : i)), v(t);
          const a = [t, ...M.filter((d) => d !== t)].slice(0, 10);
          S(a), N(`Saved to Documents/${s.name}`);
        } else
          await n.fs.write(s.id, s.content), u((e) => e.map((t) => t.id === s.id ? { ...t, isModified: !1 } : t)), N(`Saved ${s.name}`);
      } catch (e) {
        N(`Save failed: ${e.message}`, 3e3);
      }
  }, [s, n, M, S, N]), ge = g((e) => {
    u((t) => {
      const a = t.filter((d) => d.id !== e);
      return b === e && v(a.length > 0 ? a[a.length - 1].id : null), a;
    });
  }, [b]), be = g((e) => {
    s && u((t) => t.map((a) => a.id === s.id ? { ...a, content: e, isModified: !0 } : a));
  }, [s]), ae = g(() => {
    const e = ee.current;
    if (!e || !s) return;
    const t = e.value, a = e.selectionStart, d = t.slice(0, a).split(`
`).length, i = a - t.lastIndexOf(`
`, a - 1);
    u((k) => k.map((m) => m.id === s.id ? { ...m, cursorLine: d, cursorCol: i } : m));
  }, [s]);
  D(() => {
    if (_.current || !p) return;
    _.current = !0;
    let e = !1;
    return (async () => {
      if (p.nodeId)
        try {
          const i = await n.fs.getNodeById(p.nodeId);
          if (e) return;
          if (i && !i.isDirectory) {
            const k = await n.fs.read(i.id);
            if (e) return;
            const m = typeof k == "string" ? k : new TextDecoder().decode(k);
            u((h) => h.some((P) => P.id === i.id) ? h : [...h, { id: i.id, name: i.name, content: m, isModified: !1, cursorLine: 1, cursorCol: 1 }]), v(i.id);
            return;
          }
        } catch {
        }
      const a = `new-${Date.now()}`, d = {
        id: a,
        name: p.fileName || "Untitled.txt",
        content: p.initialContent ?? "",
        isModified: !!p.initialContent,
        cursorLine: 1,
        cursorCol: 1
      };
      e || (u((i) => [...i, d]), v(a));
    })(), () => {
      e = !0;
    };
  }, [p, n]), D(() => {
    const e = (t) => {
      (t.ctrlKey || t.metaKey) && t.key === "s" && (t.preventDefault(), U()), (t.ctrlKey || t.metaKey) && t.key === "f" && (t.preventDefault(), R((a) => !a)), (t.ctrlKey || t.metaKey) && t.key === "n" && (t.preventDefault(), L()), (t.ctrlKey || t.metaKey) && t.key === "o" && (t.preventDefault(), w(!0));
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
  }, [U, L]), D(() => {
    z && A();
  }, [z, A]);
  const ke = (e, t) => {
    if (!t || !J[t]) return e;
    const a = J[t];
    let d = [e];
    return a.forEach(({ pattern: i, color: k }) => {
      const m = [];
      d.forEach((h, P) => {
        if (typeof h != "string") {
          m.push(h);
          return;
        }
        let $ = 0;
        [...h.matchAll(new RegExp(i, "g"))].forEach((q) => {
          const T = q.index ?? 0;
          T > $ && m.push(h.slice($, T)), m.push(/* @__PURE__ */ r("span", { style: { color: k }, children: q[0] }, `${P}-${T}`)), $ = T + q[0].length;
        }), $ < h.length && m.push(h.slice($));
      }), d = m;
    }), d;
  }, we = ne(() => {
    const e = /* @__PURE__ */ new Map();
    for (const t of j) e.set(t.id, t);
    return e;
  }, [j]);
  return D(() => {
    A();
  }, [A]), /* @__PURE__ */ l("div", { className: "flex flex-col h-full", style: { background: "var(--bg-window)" }, children: [
    /* @__PURE__ */ l("div", { className: "flex items-center gap-1 px-2 h-10 border-b shrink-0", style: { borderColor: "var(--border-subtle)", background: "var(--bg-titlebar)" }, children: [
      /* @__PURE__ */ l("button", { onClick: L, className: "flex items-center gap-1 px-2 py-1 rounded-sm text-xs hover:bg-[var(--bg-hover)] text-[var(--text-primary)]", title: "New (Ctrl+N)", children: [
        /* @__PURE__ */ r(he, { size: 14 }),
        " New"
      ] }),
      /* @__PURE__ */ l("button", { onClick: () => w(!0), className: "flex items-center gap-1 px-2 py-1 rounded-sm text-xs hover:bg-[var(--bg-hover)] text-[var(--text-primary)]", title: "Open (Ctrl+O)", children: [
        /* @__PURE__ */ r(pe, { size: 14 }),
        " Open"
      ] }),
      /* @__PURE__ */ l("button", { onClick: () => {
        U();
      }, className: "flex items-center gap-1 px-2 py-1 rounded-sm text-xs hover:bg-[var(--bg-hover)] text-[var(--text-primary)]", title: "Save (Ctrl+S)", children: [
        /* @__PURE__ */ r(me, { size: 14 }),
        " Save"
      ] }),
      /* @__PURE__ */ r("div", { className: "w-px h-5 mx-1", style: { background: "var(--border-subtle)" } }),
      /* @__PURE__ */ l("button", { onClick: () => R(!O), className: "flex items-center gap-1 px-2 py-1 rounded-sm text-xs hover:bg-[var(--bg-hover)] text-[var(--text-primary)]", children: [
        /* @__PURE__ */ r(X, { size: 14 }),
        " Find"
      ] }),
      /* @__PURE__ */ r("button", { onClick: () => xe(!F), className: `flex items-center gap-1 px-2 py-1 rounded-sm text-xs ${F ? "text-[var(--accent-primary)]" : "text-[var(--text-primary)]"} hover:bg-[var(--bg-hover)]`, title: "Word Wrap", children: /* @__PURE__ */ r(vt, { size: 14 }) }),
      /* @__PURE__ */ r("button", { onClick: () => ue(!V), className: `flex items-center gap-1 px-2 py-1 rounded-sm text-xs ${V ? "text-[var(--accent-primary)]" : "text-[var(--text-primary)]"} hover:bg-[var(--bg-hover)]`, title: "Line Numbers", children: /* @__PURE__ */ r(st, { size: 14 }) }),
      /* @__PURE__ */ r("div", { className: "flex-1" }),
      Q && /* @__PURE__ */ r("span", { className: "text-[10px] mr-2", style: { color: "var(--text-secondary)" }, children: Q }),
      /* @__PURE__ */ r("button", { onClick: () => G((e) => Math.max(8, e - 1)), className: "p-1 rounded-sm hover:bg-[var(--bg-hover)] text-[var(--text-secondary)]", children: /* @__PURE__ */ r(Ct, { size: 14 }) }),
      /* @__PURE__ */ r("span", { className: "text-[10px] text-[var(--text-secondary)] w-6 text-center", children: C }),
      /* @__PURE__ */ r("button", { onClick: () => G((e) => Math.min(32, e + 1)), className: "p-1 rounded-sm hover:bg-[var(--bg-hover)] text-[var(--text-secondary)]", children: /* @__PURE__ */ r(wt, { size: 14 }) })
    ] }),
    O && /* @__PURE__ */ l("div", { className: "flex items-center gap-2 px-3 h-9 border-b", style: { borderColor: "var(--border-subtle)", background: "var(--bg-titlebar)" }, children: [
      /* @__PURE__ */ r(X, { size: 14, className: "text-[var(--text-secondary)]" }),
      /* @__PURE__ */ r(
        "input",
        {
          autoFocus: !0,
          value: H,
          onChange: (e) => ye(e.target.value),
          placeholder: "Find...",
          className: "flex-1 rounded-input bg-transparent text-xs text-[var(--text-primary)] outline-none placeholder:text-[var(--text-disabled)]"
        }
      ),
      /* @__PURE__ */ r("button", { onClick: () => R(!1), className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)]", children: /* @__PURE__ */ r(E, { size: 14 }) })
    ] }),
    x.length > 0 && /* @__PURE__ */ r("div", { className: "flex items-center gap-0 border-b overflow-x-auto custom-scrollbar", style: { borderColor: "var(--border-subtle)", background: "var(--bg-titlebar)" }, children: x.map((e) => /* @__PURE__ */ l(
      "div",
      {
        role: "tab",
        tabIndex: 0,
        onClick: () => v(e.id),
        onKeyDown: (t) => {
          (t.key === "Enter" || t.key === " ") && (t.preventDefault(), v(e.id));
        },
        className: "flex items-center gap-1.5 px-3 py-1.5 text-xs border-r min-w-0 shrink-0 transition-colors cursor-pointer outline-none",
        style: {
          borderColor: "var(--border-subtle)",
          background: b === e.id ? "var(--bg-window)" : "transparent",
          color: b === e.id ? "var(--text-primary)" : "var(--text-secondary)",
          borderBottom: b === e.id ? "2px solid var(--accent-primary)" : "2px solid transparent"
        },
        children: [
          /* @__PURE__ */ r(o, { name: e.name, size: 12 }),
          /* @__PURE__ */ l("span", { className: "truncate max-w-[120px]", children: [
            e.isModified ? "● " : "",
            e.name
          ] }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: (t) => {
                t.stopPropagation(), ge(e.id);
              },
              className: "ml-1 hover:text-[var(--accent-error)]",
              "aria-label": `Close ${e.name}`,
              children: /* @__PURE__ */ r(E, { size: 12 })
            }
          )
        ]
      },
      e.id
    )) }),
    s ? /* @__PURE__ */ l("div", { className: "flex-1 flex overflow-hidden relative", children: [
      V && /* @__PURE__ */ r(
        "div",
        {
          className: "shrink-0 overflow-hidden py-2 text-right select-none",
          style: {
            width: 48,
            background: "var(--bg-titlebar)",
            borderRight: "1px solid var(--border-subtle)",
            fontSize: C,
            lineHeight: `${C + 6}px`,
            fontFamily: "'JetBrains Mono', monospace"
          },
          children: /* @__PURE__ */ r("div", { ref: K, style: { willChange: "transform" }, children: te.map((e, t) => /* @__PURE__ */ r(
            "div",
            {
              className: "px-2",
              style: {
                color: t + 1 === s.cursorLine ? "var(--text-primary)" : "var(--text-disabled)",
                fontWeight: t + 1 === s.cursorLine ? 600 : 400
              },
              children: t + 1
            },
            t
          )) })
        }
      ),
      /* @__PURE__ */ l("div", { className: "flex-1 relative overflow-hidden", children: [
        /* @__PURE__ */ r(
          "textarea",
          {
            ref: ee,
            value: s.content,
            onChange: (e) => be(e.target.value),
            onKeyUp: ae,
            onClick: ae,
            onScroll: (e) => {
              const t = e.currentTarget.scrollTop;
              B.current && (B.current.style.transform = `translateY(${-t}px)`), K.current && (K.current.style.transform = `translateY(${-t}px)`);
            },
            spellCheck: !1,
            className: "absolute inset-0 w-full h-full resize-none outline-none bg-transparent text-transparent caret-[var(--text-primary)] p-2 z-10 custom-scrollbar",
            style: {
              fontSize: C,
              lineHeight: `${C + 6}px`,
              fontFamily: "'JetBrains Mono', monospace",
              whiteSpace: F ? "pre-wrap" : "pre",
              tabSize: 4
            }
          }
        ),
        /* @__PURE__ */ r(
          "div",
          {
            ref: B,
            className: "absolute inset-0 pointer-events-none p-2",
            style: {
              fontSize: C,
              lineHeight: `${C + 6}px`,
              fontFamily: "'JetBrains Mono', monospace",
              whiteSpace: F ? "pre-wrap" : "pre",
              tabSize: 4,
              color: "var(--text-primary)",
              willChange: "transform"
            },
            children: W && J[W] ? te.map((e, t) => /* @__PURE__ */ r("div", { children: ke(e, W) }, t)) : s.content
          }
        )
      ] }),
      O && H && /* @__PURE__ */ l("div", { className: "absolute bottom-8 right-4 px-2 py-1 rounded-sm text-[10px]", style: { background: "var(--accent-primary)", color: "white" }, children: [
        (s.content.match(new RegExp(H, "g")) || []).length,
        " matches"
      ] })
    ] }) : /* @__PURE__ */ l("div", { className: "flex-1 flex flex-col items-center justify-center gap-3", children: [
      /* @__PURE__ */ r(le, { size: 48, className: "text-[var(--text-disabled)] opacity-30" }),
      /* @__PURE__ */ r("div", { className: "text-sm text-[var(--text-secondary)]", children: "Open a file or create a new document" }),
      /* @__PURE__ */ l("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ r("button", { onClick: L, className: "px-4 py-2 rounded-sm text-xs font-medium", style: { background: "var(--accent-primary)", color: "white" }, children: "New File" }),
        /* @__PURE__ */ r("button", { onClick: () => w(!0), className: "px-4 py-2 rounded-sm text-xs font-medium border", style: { borderColor: "var(--border-default)", color: "var(--text-primary)" }, children: "Open File" })
      ] }),
      M.length > 0 && /* @__PURE__ */ l("div", { className: "mt-4", children: [
        /* @__PURE__ */ r("div", { className: "text-[10px] text-[var(--text-disabled)] uppercase tracking-wider mb-2 text-center", children: "Recent Files" }),
        M.slice(0, 5).map((e) => {
          const t = we.get(e);
          return t ? /* @__PURE__ */ l(
            "button",
            {
              onClick: () => {
                re(e);
              },
              className: "flex items-center gap-2 w-full px-3 py-1.5 rounded-sm text-xs text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]",
              children: [
                /* @__PURE__ */ r(o, { name: t.name, size: 12 }),
                " ",
                t.name
              ]
            },
            e
          ) : null;
        })
      ] })
    ] }),
    s && /* @__PURE__ */ l("div", { className: "flex items-center gap-4 px-3 h-6 border-t shrink-0 text-[10px]", style: { borderColor: "var(--border-subtle)", background: "var(--bg-titlebar)", color: "var(--text-secondary)" }, children: [
      /* @__PURE__ */ r("span", { children: s.name.split(".").pop()?.toUpperCase() || "TXT" }),
      /* @__PURE__ */ r("span", { children: "UTF-8" }),
      /* @__PURE__ */ l("span", { children: [
        "Ln ",
        s.cursorLine,
        ", Col ",
        s.cursorCol
      ] }),
      /* @__PURE__ */ l("span", { children: [
        s.content.length,
        " chars"
      ] }),
      /* @__PURE__ */ l("span", { children: [
        s.content.split(/\s+/).filter(Boolean).length,
        " words"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex-1" }),
      s.isModified && /* @__PURE__ */ r("span", { className: "text-[var(--accent-warning)]", children: "Modified" })
    ] }),
    z && /* @__PURE__ */ r("div", { className: "absolute inset-0 z-50 flex items-center justify-center", style: { background: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ l("div", { className: "w-[480px] max-h-[400px] rounded-lg flex flex-col overflow-hidden", style: { background: "var(--bg-window)", boxShadow: "var(--shadow-lg)" }, children: [
      /* @__PURE__ */ l("div", { className: "flex items-center justify-between px-4 py-3 border-b", style: { borderColor: "var(--border-subtle)" }, children: [
        /* @__PURE__ */ r("h3", { className: "text-sm font-semibold text-[var(--text-primary)]", children: "Open File" }),
        /* @__PURE__ */ r("button", { onClick: () => w(!1), className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)]", children: /* @__PURE__ */ r(E, { size: 16 }) })
      ] }),
      /* @__PURE__ */ l("div", { className: "flex-1 overflow-auto custom-scrollbar p-2", children: [
        j.length === 0 && /* @__PURE__ */ r("div", { className: "px-3 py-6 text-xs text-center text-[var(--text-disabled)]", children: "No text files in Documents, Desktop, or Downloads." }),
        j.map((e) => /* @__PURE__ */ l(
          "button",
          {
            onClick: () => {
              re(e.id);
            },
            className: "flex items-center gap-2 w-full px-3 py-2 rounded-sm text-xs text-[var(--text-primary)] hover:bg-[var(--bg-hover)]",
            children: [
              /* @__PURE__ */ r(o, { name: e.name, size: 14, className: "text-[var(--text-secondary)]" }),
              /* @__PURE__ */ r("span", { className: "flex-1 text-left", children: e.name }),
              /* @__PURE__ */ r("span", { className: "text-[var(--text-disabled)]", children: zt[e.folder] })
            ]
          },
          e.id
        ))
      ] })
    ] }) })
  ] });
}
function At(n) {
  return function() {
    return /* @__PURE__ */ r(Ft, { host: n.host });
  };
}
export {
  At as default
};
//# sourceMappingURL=index.js.map
