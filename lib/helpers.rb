Dir.glob(File.join('./lib', '**', '*.rb')).sort.each { |f| require f }

use_helper Nanoc::Helpers::Rendering
use_helper Nanoc::Helpers::LinkTo
use_helper Nanoc::Helpers::Breadcrumbs
use_helper Helpers::LinkHelper
use_helper Helpers::PaginationHelper
