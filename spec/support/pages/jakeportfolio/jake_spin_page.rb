class JakeSpinPage < SitePrism::Page
  set_url '/SpinItForward'
  element :title, ['h1', text: 'spin']
  element :home_link, "h3[id='work-page-minilink']"
  element :info_link, "h3[id='info-page-minilink']"
  element :lab_link, "h3[id='lab-page-minilink']"

  def navigate_info
    extend RSpec::Matchers
    info_link.click
    expect(@session.title).to eq 'info - Jake LaMothe'
  end

  def navigate_lab
    extend RSpec::Matchers
    lab_link.click
    expect(@session.title).to eq 'lab - Jake LaMothe'
  end

  def navigate_home
    extend RSpec::Matchers
    home_link.click
    expect(@session.title).to eq 'work - Jake LaMothe'
  end
end