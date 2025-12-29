import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://wpwphrhqhnrocnzglvwx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indwd3BocmhxaG5yb2Nuemdsdnd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4OTIwNTksImV4cCI6MjA4MTQ2ODA1OX0.j03BwJ-4ktF2BzXYogu4a6urowyffSr-ZzxtXk6DLH8'
);

const DESIGN_SYSTEM_ID = '00000000-0000-0000-0000-000000000001';

async function populateDesignLibrary() {
  console.log('Starting to populate design library...');

  // Add components
  console.log('Adding components...');
  const { data: componentData, error: componentError } = await supabase
    .from('components')
    .insert([
      {
        design_system_id: DESIGN_SYSTEM_ID,
        name: 'Primary Button',
        category: 'button',
        description: 'Primary call-to-action button with teal background',
        html_template: '<button class="btn-primary">{{label}}</button>',
        css_styles: '.btn-primary { background: #208192; color: white; padding: 0.75rem 2rem; border-radius: 0.5rem; font-family: Hanken Grotesk, sans-serif; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; } .btn-primary:hover { background: #196d7a; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(32, 129, 146, 0.3); }',
        props_schema: { label: 'string' }
      },
      {
        design_system_id: DESIGN_SYSTEM_ID,
        name: 'Secondary Button',
        category: 'button',
        description: 'Secondary button with outline style',
        html_template: '<button class="btn-secondary">{{label}}</button>',
        css_styles: '.btn-secondary { background: transparent; color: #208192; padding: 0.75rem 2rem; border-radius: 0.5rem; font-family: Hanken Grotesk, sans-serif; font-weight: 600; border: 2px solid #208192; cursor: pointer; transition: all 0.2s; } .btn-secondary:hover { background: #208192; color: white; }',
        props_schema: { label: 'string' }
      },
      {
        design_system_id: DESIGN_SYSTEM_ID,
        name: 'Navigation Bar',
        category: 'navigation',
        description: 'Horizontal navigation bar with logo and links',
        html_template: '<nav class="navbar"><div class="nav-logo">{{logo}}</div><ul class="nav-links">{{#links}}<li><a href="{{url}}">{{text}}</a></li>{{/links}}</ul></nav>',
        css_styles: '.navbar { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; background: white; border-bottom: 1px solid #e5e7eb; } .nav-logo { font-family: Spectral, serif; font-size: 1.5rem; font-weight: 700; color: #208192; } .nav-links { display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0; } .nav-links a { font-family: Hanken Grotesk, sans-serif; color: #4b5563; text-decoration: none; transition: color 0.2s; } .nav-links a:hover { color: #208192; }',
        props_schema: { logo: 'string', links: 'array' }
      }
    ]);

  if (componentError) {
    console.error('Error adding components:', componentError);
  } else {
    console.log('Components added successfully!');
  }

  // Add assets
  console.log('Adding assets...');
  const { data: assetData, error: assetError } = await supabase
    .from('assets')
    .insert([
      {
        design_system_id: DESIGN_SYSTEM_ID,
        name: 'Hero Background',
        type: 'image',
        url: 'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=1920',
        description: 'Modern office workspace hero background',
        metadata: { width: 1920, height: 1080 }
      },
      {
        design_system_id: DESIGN_SYSTEM_ID,
        name: 'Team Photo',
        type: 'image',
        url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Diverse team collaboration photo',
        metadata: { width: 1200, height: 800 }
      },
      {
        design_system_id: DESIGN_SYSTEM_ID,
        name: 'Icon Set',
        type: 'icon',
        url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Collection of UI icons',
        metadata: { format: 'svg', count: 50 }
      }
    ]);

  if (assetError) {
    console.error('Error adding assets:', assetError);
  } else {
    console.log('Assets added successfully!');
  }

  // Add design tokens
  console.log('Adding design tokens...');
  const { data: tokenData, error: tokenError } = await supabase
    .from('design_tokens')
    .insert([
      {
        design_system_id: DESIGN_SYSTEM_ID,
        category: 'colors',
        name: 'accent-coral',
        value: '#f87171',
        description: 'Accent coral color for highlights and alerts'
      },
      {
        design_system_id: DESIGN_SYSTEM_ID,
        category: 'colors',
        name: 'neutral-100',
        value: '#f3f4f6',
        description: 'Light neutral background'
      },
      {
        design_system_id: DESIGN_SYSTEM_ID,
        category: 'spacing',
        name: 'space-xs',
        value: '0.5rem',
        description: 'Extra small spacing unit'
      },
      {
        design_system_id: DESIGN_SYSTEM_ID,
        category: 'spacing',
        name: 'space-sm',
        value: '1rem',
        description: 'Small spacing unit'
      },
      {
        design_system_id: DESIGN_SYSTEM_ID,
        category: 'spacing',
        name: 'space-md',
        value: '1.5rem',
        description: 'Medium spacing unit'
      },
      {
        design_system_id: DESIGN_SYSTEM_ID,
        category: 'spacing',
        name: 'space-lg',
        value: '2rem',
        description: 'Large spacing unit'
      },
      {
        design_system_id: DESIGN_SYSTEM_ID,
        category: 'typography',
        name: 'font-size-xs',
        value: '0.75rem',
        description: 'Extra small font size'
      },
      {
        design_system_id: DESIGN_SYSTEM_ID,
        category: 'typography',
        name: 'font-size-base',
        value: '1rem',
        description: 'Base font size'
      },
      {
        design_system_id: DESIGN_SYSTEM_ID,
        category: 'typography',
        name: 'font-size-lg',
        value: '1.125rem',
        description: 'Large font size'
      },
      {
        design_system_id: DESIGN_SYSTEM_ID,
        category: 'typography',
        name: 'font-size-xl',
        value: '1.25rem',
        description: 'Extra large font size'
      }
    ]);

  if (tokenError) {
    console.error('Error adding design tokens:', tokenError);
  } else {
    console.log('Design tokens added successfully!');
  }

  console.log('Design library population complete!');
}

populateDesignLibrary();
