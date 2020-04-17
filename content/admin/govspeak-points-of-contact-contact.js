/* globals CMS:true */

CMS.registerEditorComponent({
  id: "points-of-contact-contact",
  label: "Points of Contact - Contact",
  fields: [{ name: "body", label: "Content", widget: "markdown" }],
  pattern: /^\$C([\w|\W|\n]*)\$C$/,
  fromBlock: function (match) {
    return {
      body: match[1],
    };
  },
  toBlock: function (obj) {
    return ["$C", obj.body, "$C"].join("\n");
  },
  toPreview: function (obj) {
    var str = [
      '<div class="contact">',
      "  <p>",
      obj.body.replace(/\n/g, "<br>"),
      "  </p>",
      "</div>",
    ].join("\n");
    return str;
  },
});
