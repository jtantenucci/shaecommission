module ShaePageFactory
  class << self
    include Capybara::DSL

    def visit_pages
      extend RSpec::Matchers
      navigate_info
      navigate_charcoal
      navigate_photos
      navigate_paint
    end

    def navigate_info
      @app = PortfolioPages.new
      @app.shae_home_page.navigate_info
      verify_info
    end

    def navigate_lab
      @app = PortfolioPages.new
      @app.shae_home_page.navigate_charcoal
      verify_lab
    end

    def navigate_photos
      @app = PortfolioPages.new
      @app.shae_home_page.navigate_photos
      verify_mint
    end

    def navigate_paint
      @app = PortfolioPages.new
      @app.shae_home_page.navigate_paint
      verify_valkyrie
    end

    def verify_home
      @app = PortfolioPages.new
      expect(@app.shae_home_page).to have_title 'shae overlieden'
    end

    def verify_info
      @app = PortfolioPages.new
      expect(@app.shae_info_page).to have_title 'info - shae overlieden'
    end

    def verify_charcoal
      @app = PortfolioPages.new
      expect(@app.shae_charcoal_page).to have_title 'charcoal - shae overlieden'
    end

    def verify_photos
      @app = PortfolioPages.new
      expect(@app.shae_photos_page).to have_title 'photos - shae overlieden'
    end

    def verify_paint
      @app = PortfolioPages.new
      expect(@app.shae_paint_page).to have_title 'paint - shae overlieden'
    end
    end
end
