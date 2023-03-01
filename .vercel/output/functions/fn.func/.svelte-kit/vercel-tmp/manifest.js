export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["AdrianTrevilyan.mp4","AlbertHopoate.mp4","favicon.png"]),
	mimeTypes: {".mp4":"video/mp4",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c11b6450.mjs","imports":["_app/immutable/entry/start.c11b6450.mjs","_app/immutable/chunks/index.1128cc4d.mjs","_app/immutable/chunks/singletons.09791973.mjs"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.023ea676.mjs","imports":["_app/immutable/entry/app.023ea676.mjs","_app/immutable/chunks/preload-helper.41c905a7.mjs","_app/immutable/chunks/index.1128cc4d.mjs"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
