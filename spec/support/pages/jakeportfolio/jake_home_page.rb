class JakeHomePage < SitePrism::Page
  set_url('/')
  element :title, 'Jake LaMothe'
  element :info_link, "h1[id='info-page-link']"
  element :lab_link, "h1[id='lab-page-link']"
  element :mint_tile, "a[id='mint502-image']"
  element :valkyrie_tile, "a[id='valkyrie-image']"
  element :rayus_tile, "a[id='rayus-image']"
  element :spin_tile, "a[id='spin-image']"

  def navigate_info
    extend RSpec::Matchers
    info_link.click
  end

  def navigate_lab
    extend RSpec::Matchers
    lab_link.click
  end

  def navigate_mint
    extend RSpec::Matchers
    mint_tile.click
  end

  def navigate_valkyrie
    extend RSpec::Matchers
    valkyrie_tile.click
  end

  def navigate_rayus
    extend RSpec::Matchers
    rayus_tile.click
  end

  def navigate_spin
    extend RSpec::Matchers
    spin_tile.click
  end
end