describe 'portfolio tests' do
  before :all do
    @app = PortfolioPages.new
  end

  it 'navigate info' do
    @app.shae_home_page.navigate_info
    expect(@app.shae_info_page.displayed?).to eq true
  end

  it 'navigate charcoal' do
    @app.shae_home_page.navigate_charcoal
    expect(@app.shae_charcoal_page.displayed?).to eq true
  end

  it 'navigate photos' do
    @app.shae_home_page.navigate_photos
    expect(@app.shae_photos_page_page.displayed?).to eq true
  end

  it 'navigate paint' do
    @app.shae_home_page.navigate_paint
    expect(@app.shae_paint_page.displayed?).to eq true
  end
end

