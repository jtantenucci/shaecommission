class JakeLabPage < SitePrism::Page
  set_url '/lab'
  element :title, ['h1', text: 'lab']
  element :home_link, "h3[id='work-page-minilink']"
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
    expect(@app.jake_home_page).to have_title 'Jake LaMothe'
  end

  def verify_info
    extend RSpec::Matchers
    @app = PortfolioPages.new
    expect(@app.jake_info_page).to have_title 'info - Jake LaMothe'
  end

  def visit_home
    home_link.click
  end

  def visit_info
    info_link.click
  end
end