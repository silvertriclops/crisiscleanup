module Legacy
  class LegacyEvent < ActiveRecord::Base
  	  self.per_page = 500
  	  has_paper_trail
  	  has_many :legacy_organization_events
  	  has_many :legacy_sites
 	  has_many :legacy_organizations, through: :legacy_organization_events
  	 
  	  validates_presence_of :name,:case_label,:created_date,:start_date
  end
end