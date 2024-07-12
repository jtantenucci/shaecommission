require 'appium_capybara'
require 'appium_lib'
require 'capybara/rspec'
require 'selenium/webdriver'
require 'yaml'

def register_base_driver_options(options)
  options.add_argument('--no-sandbox')
  options.add_argument('--start-maximized')
  options.add_argument('--disable-dev-shm-usage')
  options.add_argument("--remote-debugging-port=9222")
  options.add_argument('--window-size=1900,1400')
  options.add_argument('--default_max_wait_time=7')
  options.add_argument('--server_port=59876')
  options.add_argument('--enable-features=NetworkService,NetworkServiceInProcess')
  options.add_argument('--user-agent=automation-tests')
end

def build_http_client
  ::Selenium::WebDriver::Remote::Http::Default.new.tap do |client|
    client.read_timeout = 120 # Default: 60
    client.open_timeout = 120 # Default: 60
  end
end

Capybara.register_driver :selenium_chrome do |app|
  options = ::Selenium::WebDriver::Chrome::Options.new
  register_base_driver_options(options)
  Capybara::Selenium::Driver.new(app, browser: :chrome, capabilities: options, http_client: build_http_client)
end

Capybara.register_driver :selenium_chrome_headless do |app|
  options = ::Selenium::WebDriver::Chrome::Options.new
  options.add_argument('--headless')
  options.add_argument('--disable-gpu')
  register_base_driver_options(options)
  Capybara::Selenium::Driver.new(app, browser: :chrome, capabilities: options, http_client: build_http_client)
end

Capybara.register_driver :selenium_chrome_incognito do |app|
  options = ::Selenium::WebDriver::Chrome::Options.new
  options.add_argument('--incognito')
  register_base_driver_options(options)
  Capybara::Selenium::Driver.new(app, browser: :chrome, capabilities: options, http_client: build_http_client)
end

Capybara.register_driver :selenium_chrome_headless_incognito do |app|
  options = ::Selenium::WebDriver::Chrome::Options.new
  options.add_argument('--headless')
  options.add_argument('--incognito')
  register_base_driver_options(options)
  Capybara::Selenium::Driver.new(app, browser: :chrome, capabilities: options, http_client: build_http_client)
end

Capybara.register_driver :remote_session do |app|
  browser_caps = ENV.fetch('REMOTE_BROWSER_DEFAULT_CAPS', 'windows_chrome_caps')
  config = YAML.load_file('config/remote_browser_config.yml')
  options = config['common_caps'].merge(config[browser_caps])
  options['name'] = RSpec.current_example.metadata[:feature].to_s
  # bs_options = ::Selenium::WebDriver::Chrome::Options.new
  # register_base_driver_options(bs_options)
  # options.merge(bs_options)
  if ENV['MOBILE_WEB'] == 'true'
    options['name'] = RSpec.current_example.metadata[:layout].to_s
    url = "http://#{user}:#{key}@#{config['server']}"
    appium_lib_options = {
      server_url: url
    }
    all_options = {
      appium_lib: appium_lib_options,
      caps: options
    }
    Appium::Capybara::Driver.new app, all_options
  else
    Capybara::Selenium::Driver.new(app,
                                   browser: :remote,
                                   url: "http://#{user}:#{key}@#{config['server']}",
                                   desired_capabilities: options, http_client: build_http_client)
  end
end
