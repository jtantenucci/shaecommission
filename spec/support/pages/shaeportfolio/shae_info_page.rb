class ShaeInfoPage < SitePrism::Page
  set_url '/info'
  element :title, ['h1', text: 'info']
  element :home_link, "h3[id='home-page-minilink']"
  element :charcoal_link, "h3[id='charcoal-page-minilink']"

  def navigate_charcoal_from_info
    extend RSpec::Matchers
    visit url
    charcoal_link.click
  end

  def navigate_home_from_info
    extend RSpec::Matchers
    visit url
    home_link.click
  end
end