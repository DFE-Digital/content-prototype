/* globals CMS:true */

CMS.registerEditorComponent({
  id: "callout-information",
  label: "Callout Information",
  fields: [{ name: "body", label: "Body", widget: "markdown" }],
  pattern: /^\^(.*)\^$/,
  fromBlock: function (match) {
    return {
      body: match[1],
    };
  },
  toBlock: function (obj) {
    return `^${obj.body}^`;
  },
  toPreview: function (obj) {
    var str = [
      '<div role="note" aria-label="Information" class="application-notice info-notice">',
      "  <p>",
      obj.body,
      "  </p>",
      "</div>",
    ].join("\n");
    return str;
  },
});
