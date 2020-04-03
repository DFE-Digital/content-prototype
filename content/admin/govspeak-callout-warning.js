/* globals CMS:true */

CMS.registerEditorComponent({
  id: "callout-warning",
  label: "Callout Warning",
  fields: [{ name: "body", label: "Body", widget: "markdown" }],
  pattern: /^%\n?(.*)\n?%$/,
  fromBlock: function (match) {
    return {
      body: match[1],
    };
  },
  toBlock: function (obj) {
    return ["%", obj.body, "%"].join("\n");
  },
  toPreview: function (obj) {
    var str = [
      '<div role="note" aria-label="Warning" class="application-notice help-notice">',
      "  <p>",
      obj.body,
      "  </p>",
      "</div>",
    ].join("\n");
    return str;
  },
});
