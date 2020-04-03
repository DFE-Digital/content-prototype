/* globals CMS:true */

CMS.registerEditorComponent({
  id: "points-of-contact-address",
  label: "Points of Contact - Address",
  fields: [{ name: "body", label: "Content", widget: "markdown" }],
  pattern: /^\$A\n?([\w|\W|\n]*)\$A$/,
  fromBlock: function (match) {
    return {
      body: match[1],
    };
  },
  toBlock: function (obj) {
    return ["$A", obj.body, "$A"].join("\n");
  },
  toPreview: function (obj) {
    var str = [
      '<div class="address">',
      '  <div class="adr org fn">',
      "    <p>",
      obj.body.replace(/\n/g, "<br/>"),
      "    </p>",
      "  </div>",
      "</div>",
    ].join("\n");
    return str;
  },
});
