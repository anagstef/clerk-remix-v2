var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/anagstef/repos/support/remix-v2/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/anagstef/repos/support/remix-v2/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader
});
var import_css_bundle = __toESM(require_dist()), import_react2 = require("@remix-run/react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix = require("@clerk/remix"), import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
], loader = (args) => (0, import_ssr.rootAuthLoader)(args), ErrorBoundary = (0, import_remix.V2_ClerkErrorBoundary)();
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}
var root_default = (0, import_remix.ClerkApp)(App);

// app/routes/client-protected.tsx
var client_protected_exports = {};
__export(client_protected_exports, {
  default: () => ClientProtectedPage
});
var import_remix2 = require("@clerk/remix"), import_jsx_runtime3 = require("react/jsx-runtime");
function ClientProtectedPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_remix2.SignedIn, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { children: "Client-Protected route" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_remix2.UserButton, { afterSignOutUrl: "/" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_remix2.SignedOut, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_remix2.RedirectToSignIn, {}) })
  ] });
}

// app/routes/server-protected.tsx
var server_protected_exports = {};
__export(server_protected_exports, {
  default: () => ServerProtectedPage,
  loader: () => loader2
});
var import_remix3 = require("@clerk/remix"), import_ssr2 = require("@clerk/remix/ssr.server"), import_node2 = require("@remix-run/node"), import_jsx_runtime4 = require("react/jsx-runtime"), loader2 = async (args) => {
  let { userId } = await (0, import_ssr2.getAuth)(args);
  return userId ? {} : (0, import_node2.redirect)("/sign-in");
};
function ServerProtectedPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { children: "Server-Protected route" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_remix3.UserButton, { afterSignOutUrl: "/" })
  ] });
}

// app/routes/sign-in.$.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  default: () => SignInPage
});
var import_remix4 = require("@clerk/remix"), import_jsx_runtime5 = require("react/jsx-runtime");
function SignInPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { children: "Sign In route" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_remix4.SignIn, { routing: "path", path: "/sign-in" })
  ] });
}

// app/routes/sign-up.$.tsx
var sign_up_exports = {};
__export(sign_up_exports, {
  default: () => SignUpPage
});
var import_remix5 = require("@clerk/remix"), import_jsx_runtime6 = require("react/jsx-runtime");
function SignUpPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { children: "Sign Up route" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_remix5.SignUp, { routing: "path", path: "/sign-up" })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var import_remix6 = require("@clerk/remix"), import_jsx_runtime7 = require("react/jsx-runtime"), meta = () => [
  { title: "New Remix" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  let { userId } = (0, import_remix6.useAuth)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: "Index Page" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_remix6.SignedIn, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
        "You are signed in! Your userId is: ",
        userId
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_remix6.UserButton, { afterSignOutUrl: "/" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_remix6.SignedOut, { children: "You are signed out!" })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MBKSCSLS.js", imports: ["/build/_shared/chunk-JIZTLG7K.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CTGIZBPT.js", imports: ["/build/_shared/chunk-4KJFLZX4.js", "/build/_shared/chunk-I2ZGRJE5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-RMATKPKB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/client-protected": { id: "routes/client-protected", parentId: "root", path: "client-protected", index: void 0, caseSensitive: void 0, module: "/build/routes/client-protected-MB6VDH7S.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/server-protected": { id: "routes/server-protected", parentId: "root", path: "server-protected", index: void 0, caseSensitive: void 0, module: "/build/routes/server-protected-4OK2ZTCS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in.$": { id: "routes/sign-in.$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in.$-TCEXGIOS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up.$": { id: "routes/sign-up.$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up.$-YVG5Z56G.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "b1f13e06", hmr: void 0, url: "/build/manifest-B1F13E06.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/client-protected": {
    id: "routes/client-protected",
    parentId: "root",
    path: "client-protected",
    index: void 0,
    caseSensitive: void 0,
    module: client_protected_exports
  },
  "routes/server-protected": {
    id: "routes/server-protected",
    parentId: "root",
    path: "server-protected",
    index: void 0,
    caseSensitive: void 0,
    module: server_protected_exports
  },
  "routes/sign-in.$": {
    id: "routes/sign-in.$",
    parentId: "root",
    path: "sign-in/*",
    index: void 0,
    caseSensitive: void 0,
    module: sign_in_exports
  },
  "routes/sign-up.$": {
    id: "routes/sign-up.$",
    parentId: "root",
    path: "sign-up/*",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
