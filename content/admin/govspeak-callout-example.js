/* globals CMS:true */

CMS.registerEditorComponent({
  id: "callout-example",
  label: "Callout Example",
  fields: [{ name: "body", label: "Body", widget: "markdown" }],
  pattern: /^\$E\n?(.*)\n?\$E$/,
  fromBlock: function (match) {
    return {
      body: match[1],
    };
  },
  toBlock: function (obj) {
    return ["$E", obj.body, "$E"].join("\n");
  },
  toPreview: function (obj) {
    var str = ['<div class="example">', obj.body, "</div>"].join("\n");
    return str;
  },
});
