// eslint-disable-next-line @typescript-eslint/no-var-requires
const through = require("through");

module.exports = {
  bundlerCustomizer: (bundler) => {
    //console.log(bundler);
    bundler.transform(
      (file, opts) => {
        let data = "";
        console.log(file);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return through(write, end);

        function write(buf) {
          data += buf;
        }
        function end() {
          const replaced = data.replace(
            "import.meta && import.meta.url ? new URL('.', import.meta.url).pathname : 'auto'",
            "'auto'"
          );
          this.queue(replaced);
          this.queue(null);
        }
      },
      { global: true }
    );
  },
  cliOptions: {
    dist: "dist",
    outfileName: "bundle.js",
    port: 8081,
    src: "build/index.js",
    transpilationMode: "localAndDeps",
  },
};
