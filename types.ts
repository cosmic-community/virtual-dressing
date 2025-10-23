// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Service object type
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name: string;
    description: string;
    category?: {
      key: string;
      value: string;
    };
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    starting_price?: string;
  };
}

// Team Member object type
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name: string;
    role: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    linkedin_url?: string;
    twitter_handle?: string;
  };
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    company?: string;
    testimonial: string;
    rating?: {
      key: string;
      value: string;
    };
    client_photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Case Study object type
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title: string;
    client_name: string;
    challenge: string;
    solution: string;
    results: string;
    project_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    related_service?: Service;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Service categories type
export type ServiceCategory = 'consulting' | 'development' | 'design' | 'marketing';

// Rating type
export type Rating = '5' | '4' | '3';