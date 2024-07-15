class ShaeCharcoalPage < SitePrism::Page
  set_url '/charcoal'
  element :title, ['h1', text: 'charcoal']
  element :home_link, "h3[id='home-page-minilink']"
  element :info_link, "h3[id='info-page-minilink']"

  def navigate_home
    visit_home
    verify_home
  end

  def navigate_info
    visit_info
    verify_info
  end

  def verify_home
    extend RSpec::Matchers
    @app = PortfolioPages.new
    expect(@app.shae_home_page).to have_title 'shae overlieden'
  end

  def verify_info
    extend RSpec::Matchers
    @app = PortfolioPages.new
    expect(@app.shae_info_page).to have_title 'info - shae overlieden'
  end

  def visit_home
    home_link.click
  end

  def visit_info
    info_link.click
  end
end