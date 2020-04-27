require 'govspeak'

Nanoc::Filter.define(:govspeak) do |content, params|
  Govspeak::Document.new(content, params).to_html
end
