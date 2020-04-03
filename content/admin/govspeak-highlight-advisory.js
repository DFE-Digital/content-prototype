/* globals CMS:true */

CMS.registerEditorComponent({
  id: "highlight-advisory",
  lable: "Highlight Advisory",
  fields: [{ name: "body", label: "Content", widget: "string" }],
  pattern: /^@\n?(.*)\n?@$/,
  fromBlock: function (match) {
    return {
      body: match[1],
    };
  },
  toBlock: function (obj) {
    return ["@", obj.body, "@"].join("\n");
  },
  toPreview: function (obj) {
    var str = [
      '<h3 role="note" aria-label="Important" class="advisory">',
      "  <span>",
      obj.body,
      "  </span>",
      "</h3>",
    ].join("\n");
    return str;
  },
});
