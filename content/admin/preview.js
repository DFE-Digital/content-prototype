/* globals CMS, createClass, h */
CMS.registerPreviewStyle(
  "/css/govuk_publishing_components/component_support.css"
);
CMS.registerPreviewStyle("/css/application.css");

var Preview = createClass({
  render: function () {
    var entry = this.props.entry;
    return h(
      "main",
      { class: "govuk-main-wrapper", id: "main-content" },
      h("h1", { class: "govuk-heading-xl" }, entry.getIn(["data", "title"])),
      h("div", { class: "gem-c-govspeak" }, this.props.widgetFor("body"))
    );
  },
});

CMS.registerPreviewTemplate("root", Preview);
CMS.registerPreviewTemplate("teachers", Preview);
