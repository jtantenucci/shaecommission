class ShaeHomePage < SitePrism::Page
  set_url('/')
  element :title, 'shae overlieden'
  element :info_link, "h2[text='info']"
  element :charcoal_link, "h2[text='charcoal']"
  element :photos_link, "h2[text='photos']"
  element :paint_link, "h2[text='paint']"

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