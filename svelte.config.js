import adapter from '@sveltejs/adapter-static';
 
export default {
  kit: {
    prerender: {
      entries: ["/"],
    },
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    })
  }
};
