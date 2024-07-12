class JakeInfoPage < SitePrism::Page
  set_url '/info'
  element :title, ['h1', text: 'info']
  element :home_link, "h3[id='work-page-minilink']"
  element :lab_link, "h3[id='lab-page-minilink']"
  element :ludwig_link, "p[id='ludwig-page-link']"

  def navigate_lab_from_info
    extend RSpec::Matchers
    visit url
    lab_link.click
  end

  def navigate_home_from_info
    extend RSpec::Matchers
    visit url
    home_link.click
  end

  def navigate_ludwig_from_info
    extend RSpec::Matchers
    ludwig_link.click
  end
end