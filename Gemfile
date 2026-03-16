source "https://rubygems.org"

# Jekyll 4 — used by the GitHub Actions custom workflow (NOT the legacy github-pages gem)
# The github-pages gem locks you to Jekyll 3 and blocks third-party themes like just-the-docs
gem "jekyll", "~> 4.3"

# just-the-docs theme
gem "just-the-docs", "~> 0.8.2"

group :jekyll_plugins do
  gem "jekyll-remote-theme"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Windows/JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]
