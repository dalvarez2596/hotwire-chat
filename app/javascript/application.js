// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "controllers"
import "@hotwired/turbo-rails"

Turbo.StreamActions.redirect = function() {
  Turbo.visit(this.target);
};