module Helpers
  module LinkHelper
    def link_to(*args, **kwargs)
      return super if kwargs.has_key?('class')

      super(*args, **kwargs.merge(class: 'govuk-link'))
    end
  end
end
