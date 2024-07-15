class ShaePhotosPage < SitePrism::Page
  set_url '/photos'
  element :title, ['h1', text: 'photos']
  element :home_link, "h3[id='home-page-minilink']"
  element :info_link, "h3[id='info-page-minilink']"
  element :charcoal_link, "h3[id='charcoal-page-minilink']"

  def navigate_info
    extend RSpec::Matchers
    info_link.click
    expect(@session.title).to eq 'info - shae overlieden'
  end

  def navigate_charcoal
    extend RSpec::Matchers
    charcoal_link.click
    expect(@session.title).to eq 'charcoal - shae overlieden'
  end

  def navigate_home
    extend RSpec::Matchers
    home_link.click
    expect(@session.title).to eq 'shae overlieden'
  end
end