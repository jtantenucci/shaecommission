module JakePageFactory
  class << self
    include Capybara::DSL

    def visit_pages
      extend RSpec::Matchers
      navigate_info
      navigate_lab
      navigate_work_mint
      navigate_work_valkyrie
      navigate_work_rayus
      navigate_work_spin
      navigate_mint
      navigate_valkyrie
      navigate_rayus
      navigate_spin
    end

    def navigate_info
      @app = PortfolioPages.new
      @app.jake_home_page.visit_info
      verify_info
    end

    def navigate_lab
      @app = PortfolioPages.new
      @app.jake_home_page.visit_lab
      verify_lab
    end

    def navigate_work_mint
      @app = PortfolioPages.new
      @app.jake_mint_page.visit_work
      verify_home
    end

    def navigate_work_valkyrie
      @app = PortfolioPages.new
      @app.jake_valkyrie_page.visit_work
      verify_home
    end

    def navigate_work_rayus
      @app = PortfolioPages.new
      @app.jake_rayus_page.visit_work
      verify_home
    end

    def navigate_work_spin
      @app = PortfolioPages.new
      @app.jake_spin_page.visit_work
      verify_spin
    end

    def navigate_mint
      @app = PortfolioPages.new
      @app.jake_home_page.visit_mint
      verify_mint
    end

    def navigate_valkyrie
      @app = PortfolioPages.new
      @app.jake_home_page.visit_valkyrie
      verify_valkyrie
    end

    def navigate_rayus
      @app = PortfolioPages.new
      @app.jake_home_page.visit_rayus
      verify_rayus
    end

    def navigate_spin
      @app = PortfolioPages.new
      @app.jake_home_page.visit_spin
      verify_spin
    end

    def verify_home
      @app = PortfolioPages.new
      expect(@app.jake_home_page).to have_title 'Jake LaMothe'
    end

    def verify_info
      @app = PortfolioPages.new
      expect(@app.jake_info_page).to have_title 'info - Jake LaMothe'
    end

    def verify_lab
      @app = PortfolioPages.new
      expect(@app.jake_lab_page).to have_title 'lab - Jake LaMothe'
    end

    def verify_mint
      @app = PortfolioPages.new
      expect(@app.jake_mint_page).to have_title 'mint 502 - Jake LaMothe'
    end

    def verify_valkyrie
      @app = PortfolioPages.new
      expect(@app.jake_valkyrie_page).to have_title 'valkyrie - Jake LaMothe'
    end

    def verify_rayus
      @app = PortfolioPages.new
      expect(@app.jake_rayus_page).to have_title 'rayus - Jake LaMothe'
    end

    def verify_spin
      @app = PortfolioPages.new
      expect(@app.jake_spin_page).to have_title 'spin - Jake LaMothe'
    end
    end
end
