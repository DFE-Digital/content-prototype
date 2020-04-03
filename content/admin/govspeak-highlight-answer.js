/* globals CMS:true */

CMS.registerEditorComponent({
  id: "highlight-answer",
  label: "Highlight Answer",
  fields: [{ name: "body", label: "Content", widget: "markdown" }],
  pattern: /^{::highlight-answer}\n?(.*)\n?{:\/highlight-answer}$/,
  fromBlock: function (match) {
    return {
      body: match[1],
    };
  },
  toBlock: function (obj) {
    return ["{::highlight-answer}", obj.body, "{:/highlight-answer}"].join(
      "\n"
    );
  },
  toPreview: function (obj) {
    var str = [
      '<div class="highlight-answer">',
      "  <p>",
      obj.body,
      "  </p>",
      "</div>",
    ].join("\n");
    return str;
  },
});
