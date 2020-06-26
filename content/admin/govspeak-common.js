/* globals CMS:true */
var md = window.markdownit({ breaks: true });

CMS.registerEditorComponent({
  id: "govspeak-common",
  label: "GovSpeak",
  fields: [
    {
      name: "tag",
      label: "Tag",
      widget: "select",
      hint: "Use Italic to in Highlight to make large",
      options: [
        { label: "Callout Information", value: "^" },
        { label: "Callout Warning", value: "%" },
        { label: "Callout Example", value: "$E" },
        { label: "Highlight Advisory", value: "@" },
        { label: "Highlight Answer", value: "{::highlight-answer}" },
        { label: "Highlight Statistic headline", value: "{stat-headline}" },
        { label: "Address", value: "$A" },
        { label: "Contact", value: "$C" },
        { label: "Download", value: "$D" },
        { label: "Place", value: "$P" },
        { label: "Information", value: "$I" },
        { label: "Additional Information", value: "$AI" },
        { label: "Call to Action", value: "$CTA" },
        { label: "Summary", value: "$!" },
        { label: "Blockquote", value: "$BQ" },
      ],
    },
    { name: "body", label: "Body", widget: "markdown" },
  ],
  pattern: /^(?<tag>\$E|\$C|\$A|\$BQ|\$D|\$P|\$I|\$AI|\$CTA|\$!|\^|@|%|{::highlight-answer}|{stat-headline})(?<body>[\w|\W|\n]*)(\k<tag>|{:\/highlight-answer}|{\/stat-headline})$/,
  fromBlock: function (match) {
    return {
      tag: match[1],
      body: match[2],
      closeTag: match[3],
    };
  },
  toBlock: function (obj) {
    if (!obj.tag || !obj.body) {
      return "";
    }
    let closeTag = "";
    if (obj.tag === "{::highlight-answer}") {
      closeTag = "{:/highlight-answer}";
    } else if (obj.tag === "{stat-headline}") {
      closeTag = "{/stat-headline}";
    } else {
      closeTag = obj.tag;
    }
    return `${obj.tag}${obj.body}${closeTag}`;
  },
  // eslint-disable-next-line max-lines-per-function
  toPreview: function (obj) {
    if (!obj.body.length === 0) {
      return "";
    }
    let body = md.render(obj.body);
    if (obj.tag === "$E") {
      return `<div class="example">${body}</div>`;
    } else if (obj.tag === "^") {
      return `<div class="application-notice info-notice">${body}</div>`;
    } else if (obj.tag === "%") {
      return `<div class="application-notice help-notice">${body}</div>`;
    } else if (obj.tag === "@") {
      return `<div class="advisory">${body}</div>`;
    } else if (obj.tag === "{::highlight-answer}") {
      return `<div class="highlight-answer">${body}</div>`;
    } else if (obj.tag === "{stat-headline}") {
      return `<div class="stat-headline">${body}</div>`;
    } else if (obj.tag === "$A") {
      return `<div class="address"><div class="adr org fn">${body}</div></div>`;
    } else if (obj.tag === "$C") {
      return `<div class="contact">${body}</div>`;
    } else if (obj.tag === "$D") {
      return `<div class="form-download">${body}</div>`;
    } else if (obj.tag === "$P") {
      return `<div class="place">${body}</div>`;
    } else if (obj.tag === "$I") {
      return `<div class="information">${body}</div>`;
    } else if (obj.tag === "$AI") {
      return `<div class="additional-information">${body}</div>`;
    } else if (obj.tag === "$CTA") {
      return `<div class="call-to-action">${body}</div>`;
    } else if (obj.tag === "$!") {
      return `<div class="summary">${body}</div>`;
    } else if (obj.tag === "$BQ") {
      return `<div class="blockquote">${body}</div>`;
    } else {
      return body;
    }
  },
});
