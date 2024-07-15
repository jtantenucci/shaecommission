class shae_home_page < SitePrism::Page
  set_url('/')
  element :title, 'shae overlieden'
  element :info_link, "h2[id='info-page-link']"
  element :charcoal_link, "h2[id='charcoal-page-link']"
  element :photos_link, "h2[id='photos-page-link']"
  element :paint_link, "h2[id='paint-page-link']"

  def navigate_info
    extend RSpec::Matchers
    info_link.click
  end

  def navigate_charcoal
    extend RSpec::Matchers
    charcoal_link.click
  end
  
  def navigate_photos
    extend RSpec::Matchers
    photos_link.click
  end

  def navigate_paint
    extend RSpec::Matchers
    paint_link.click
  end
end