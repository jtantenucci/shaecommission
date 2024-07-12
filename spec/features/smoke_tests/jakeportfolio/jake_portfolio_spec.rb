describe 'portfolio tests' do
  before :all do
    @app = PortfolioPages.new
  end

  it 'navigate info' do
    @app.jake_home_page.navigate_info
    expect(@app.jake_info_page.displayed?).to eq true
  end

  it 'navigate lab' do
    @app.jake_home_page.navigate_lab
    expect(@app.jake_lab_page.displayed?).to eq true
  end

  it 'navigate mint' do
    @app.jake_home_page.navigate_mint
    expect(@app.jake_mint_page.displayed?).to eq true
  end

  it 'navigate rayus' do
    @app.jake_home_page.navigate_rayus
    expect(@app.jake_rayus_page.displayed?).to eq true
  end

  it 'navigate valkyrie' do
    @app.jake_home_page.navigate_valkyrie
    expect(@app.jake_valkyrie_page.displayed?).to eq true
  end

  it 'navigate spin' do
    @app.jake_home_page.navigate_spin
    expect(@app.jake_spin_page.displayed?).to eq true
  end

  it 'navigate lab from info' do
    @app.jake_info_page.navigate_lab_from_info
    expect(@app.jake_lab_page.displayed?).to eq true
  end

  it 'navigate home from info' do
    @app.jake_info_page.navigate_home_from_info
    expect(@app.jake_home_page.displayed?).to eq true
  end
end

