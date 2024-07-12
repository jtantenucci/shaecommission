require 'dotenv/load'
require 'rspec/expectations'
require 'rspec/retry'
require_relative 'capybara_helper'
require 'capybara/rspec'
require 'capybara-screenshot/rspec'
require 'site_prism'
require_relative '../spec/support/pages/jakeportfolio/jake_home_page'
require_relative '../spec/support/pages/jakeportfolio/jake_info_page'
require_relative '../spec/support/pages/jakeportfolio/jake_lab_page'
require_relative '../spec/support/pages/jakeportfolio/jake_mint_page'
require_relative '../spec/support/pages/jakeportfolio/jake_rayus_page'
require_relative '../spec/support/pages/jakeportfolio/jake_spin_page'
require_relative '../spec/support/pages/jakeportfolio/jake_valkyrie_page'
require_relative '../spec/support/jake_page_factory'
require_relative '../spec/support/pages/portfolio_pages'
require 'pry'

RSpec.configure do |config|
  config.include Capybara::DSL
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  Kernel.srand config.seed
  config.filter_run_when_matching :focus
  config.disable_monkey_patching!
  config.expose_dsl_globally = true

  config.before :each do
    visit Capybara.app_host
  end

  RSpec::Matchers.define :relation_matching do |expected|
    match do |relation|
      relation.to_a.sort == expected.sort
    end
  end

  RSpec::Matchers.define :validate_to do |expected|
    match do |lifecycle_decision|
      lifecycle_decision[:result] == expected
    end
  end

  RSpec::Matchers.define :be_close_to do |expected|
    match do |real_number|
      (expected - real_number).abs < 0.005
    end
  end
end
