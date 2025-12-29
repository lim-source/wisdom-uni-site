import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Component {
  id: string;
  name: string;
  description: string;
  category: string;
  html_template: string;
  css_styles: string;
  props_schema: any;
  preview_image_url: string;
  design_system_id: string;
  created_at: string;
  updated_at: string;
}

export interface DesignToken {
  id: string;
  design_system_id: string;
  category: string;
  name: string;
  value: string;
  description: string;
  created_at: string;
}

export interface Asset {
  id: string;
  design_system_id: string;
  name: string;
  type: string;
  url: string;
  description: string;
  metadata: any;
  created_at: string;
}

export class DesignLibrary {
  static async getComponents(designSystemId: string): Promise<Component[]> {
    const { data, error } = await supabase
      .from('components')
      .select('*')
      .eq('design_system_id', designSystemId)
      .order('category', { ascending: true });

    if (error) {
      console.error('Error fetching components:', error);
      return [];
    }

    return data || [];
  }

  static async getDesignTokens(designSystemId: string): Promise<DesignToken[]> {
    const { data, error } = await supabase
      .from('design_tokens')
      .select('*')
      .eq('design_system_id', designSystemId)
      .order('category', { ascending: true });

    if (error) {
      console.error('Error fetching design tokens:', error);
      return [];
    }

    return data || [];
  }

  static async getAssets(designSystemId: string): Promise<Asset[]> {
    const { data, error } = await supabase
      .from('assets')
      .select('*')
      .eq('design_system_id', designSystemId)
      .order('type', { ascending: true });

    if (error) {
      console.error('Error fetching assets:', error);
      return [];
    }

    return data || [];
  }

  static async getComponentById(componentId: string): Promise<Component | null> {
    const { data, error } = await supabase
      .from('components')
      .select('*')
      .eq('id', componentId)
      .maybeSingle();

    if (error) {
      console.error('Error fetching component:', error);
      return null;
    }

    return data;
  }

  static async getAssetsByType(designSystemId: string, type: string): Promise<Asset[]> {
    const { data, error } = await supabase
      .from('assets')
      .select('*')
      .eq('design_system_id', designSystemId)
      .eq('type', type)
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching assets by type:', error);
      return [];
    }

    return data || [];
  }

  static getTokensByCategory(tokens: DesignToken[], category: string): DesignToken[] {
    return tokens.filter(token => token.category === category);
  }

  static async getComponentsByCategory(designSystemId: string, category: string): Promise<Component[]> {
    const { data, error } = await supabase
      .from('components')
      .select('*')
      .eq('design_system_id', designSystemId)
      .eq('category', category)
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching components by category:', error);
      return [];
    }

    return data || [];
  }
}
