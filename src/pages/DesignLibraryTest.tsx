import { useEffect, useState } from 'react';
import { DesignLibrary as DesignLibraryAPI, Component, Asset, DesignToken } from '../lib/designLibrary';

const DESIGN_SYSTEM_ID = '00000000-0000-0000-0000-000000000001';

export default function DesignLibraryTest() {
  const [components, setComponents] = useState<Component[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [tokens, setTokens] = useState<DesignToken[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDesignLibrary();
  }, []);

  const loadDesignLibrary = async () => {
    try {
      const [comps, assts, designTokens] = await Promise.all([
        DesignLibraryAPI.getComponents(DESIGN_SYSTEM_ID),
        DesignLibraryAPI.getAssets(DESIGN_SYSTEM_ID),
        DesignLibraryAPI.getDesignTokens(DESIGN_SYSTEM_ID),
      ]);

      setComponents(comps || []);
      setAssets(assts || []);
      setTokens(designTokens || []);
    } catch (error) {
      console.error('Error loading design library:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fefbf6] flex items-center justify-center">
        <p className="text-[#24221d] font-['Hanken_Grotesk',Helvetica]">Loading design library...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fefbf6] p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="font-['Spectral',Helvetica] font-bold text-[#1e3842] text-5xl tracking-[-2px] mb-4">
            Design Library
          </h1>
          <p className="font-['Hanken_Grotesk',Helvetica] text-[#1e3742] text-lg">
            Browse all components, assets, and design tokens from the design system
          </p>
        </header>

        {/* Components Section */}
        <section className="mb-16">
          <h2 className="font-['Spectral',Helvetica] font-semibold text-[#208192] text-3xl tracking-[-1px] mb-6">
            Components ({components.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {components.map((component) => (
              <div key={component.id} className="bg-white border border-[#e1dfd4] rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-['Crimson_Pro',Helvetica] font-semibold text-[#24221d] text-xl mb-2">
                      {component.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-[#208192]/10 text-[#208192] rounded-full text-sm font-['Hanken_Grotesk',Helvetica]">
                      {component.category}
                    </span>
                  </div>
                </div>
                <p className="font-['Hanken_Grotesk',Helvetica] text-[#1e3742] text-sm mb-4">
                  {component.description}
                </p>
                {component.preview_image_url && (
                  <div className="mb-4">
                    <img
                      src={component.preview_image_url}
                      alt={component.name}
                      className="w-full rounded-lg border border-[#e1dfd4]"
                    />
                  </div>
                )}
                <details className="mt-4">
                  <summary className="cursor-pointer font-['Hanken_Grotesk',Helvetica] text-[#208192] text-sm font-semibold">
                    View HTML Template
                  </summary>
                  <pre className="mt-3 p-4 bg-[#f5f2ea] rounded-lg overflow-x-auto text-xs">
                    <code>{component.html_template}</code>
                  </pre>
                </details>
                <details className="mt-2">
                  <summary className="cursor-pointer font-['Hanken_Grotesk',Helvetica] text-[#208192] text-sm font-semibold">
                    View CSS Styles
                  </summary>
                  <pre className="mt-3 p-4 bg-[#f5f2ea] rounded-lg overflow-x-auto text-xs">
                    <code>{component.css_styles}</code>
                  </pre>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* Assets Section */}
        <section className="mb-16">
          <h2 className="font-['Spectral',Helvetica] font-semibold text-[#208192] text-3xl tracking-[-1px] mb-6">
            Assets ({assets.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assets.map((asset) => (
              <div key={asset.id} className="bg-white border border-[#e1dfd4] rounded-lg p-6">
                <div className="mb-4 bg-[#f5f2ea] rounded-lg p-4 flex items-center justify-center min-h-[120px]">
                  {(asset.type === 'image' || asset.type === 'svg' || asset.type === 'logo') && asset.url ? (
                    <img
                      src={asset.url}
                      alt={asset.name}
                      className="max-w-full max-h-[100px] object-contain"
                    />
                  ) : (
                    <span className="text-[#24221d] text-sm">Preview not available</span>
                  )}
                </div>
                <h3 className="font-['Crimson_Pro',Helvetica] font-semibold text-[#24221d] text-lg mb-2">
                  {asset.name}
                </h3>
                <span className="inline-block px-3 py-1 bg-[#208192]/10 text-[#208192] rounded-full text-xs font-['Hanken_Grotesk',Helvetica] mb-3">
                  {asset.type}
                </span>
                <p className="font-['Hanken_Grotesk',Helvetica] text-[#1e3742] text-sm mb-3">
                  {asset.description}
                </p>
                <p className="font-['Hanken_Grotesk',Helvetica] text-[#1e3742] text-xs break-all">
                  {asset.url}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Design Tokens Section */}
        <section className="mb-16">
          <h2 className="font-['Spectral',Helvetica] font-semibold text-[#208192] text-3xl tracking-[-1px] mb-6">
            Design Tokens ({tokens.length})
          </h2>
          <div className="space-y-6">
            {['color', 'typography', 'spacing', 'border', 'shadow'].map((category) => {
              const categoryTokens = tokens.filter(t => t.category === category);
              if (categoryTokens.length === 0) return null;

              return (
                <div key={category} className="bg-white border border-[#e1dfd4] rounded-lg p-6">
                  <h3 className="font-['Crimson_Pro',Helvetica] font-semibold text-[#24221d] text-xl mb-4 capitalize">
                    {category} ({categoryTokens.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryTokens.map((token) => (
                      <div key={token.id} className="flex items-center justify-between p-3 bg-[#f5f2ea] rounded-lg">
                        <div className="flex-1">
                          <p className="font-['Hanken_Grotesk',Helvetica] text-[#24221d] text-sm font-semibold">
                            {token.name}
                          </p>
                          {token.description && (
                            <p className="font-['Hanken_Grotesk',Helvetica] text-[#1e3742] text-xs mt-1">
                              {token.description}
                            </p>
                          )}
                        </div>
                        <div className="ml-4">
                          {category === 'color' && token.value.startsWith('#') ? (
                            <div className="flex items-center gap-2">
                              <div
                                className="w-8 h-8 rounded border border-[#e1dfd4]"
                                style={{ backgroundColor: token.value }}
                              />
                              <code className="text-xs">{token.value}</code>
                            </div>
                          ) : (
                            <code className="text-xs bg-white px-2 py-1 rounded border border-[#e1dfd4]">
                              {token.value}
                            </code>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
