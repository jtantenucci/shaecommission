class ShaePaintPage < SitePrism::Page
  set_url '/paint'
  element :title, ['h1', text: 'paint']
  element :home_link, "h3[id='home-page-minilink']"
  element :info_link, "h3[id='info-page-minilink']"
  element :photos_link, "h3[id='photos-page-minilink']"

  def navigate_info
    extend RSpec::Matchers
    info_link.click
    expect(@session.title).to eq 'info - shae overlieden'
  end

  def navigate_photos
    extend RSpec::Matchers
    photos_link.click
    expect(@session.title).to eq 'photos - shae overlieden'
  end

  def navigate_home
    extend RSpec::Matchers
    home_link.click
    expect(@session.title).to eq 'shae overlieden'
  end
end