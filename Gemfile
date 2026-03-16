source "https://rubygems.org"

# Jekyll 4 — plain, no theme gem needed (fully self-contained site)
gem "jekyll", "~> 4.3"

group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Windows/JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1",           platforms: [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6", platforms: [:jruby]
