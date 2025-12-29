import { useEffect, useState } from 'react';
import { DesignLibrary } from '../lib/designLibrary';

const DESIGN_SYSTEM_ID = '00000000-0000-0000-0000-000000000001';

export default function QueryDesignLibrary() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const components = await DesignLibrary.getComponents(DESIGN_SYSTEM_ID);
        const tokens = await DesignLibrary.getDesignTokens(DESIGN_SYSTEM_ID);
        const assets = await DesignLibrary.getAssets(DESIGN_SYSTEM_ID);

        console.log('=== COMPONENTS ===');
        console.log(JSON.stringify(components, null, 2));

        console.log('\n=== DESIGN TOKENS ===');
        console.log(JSON.stringify(tokens, null, 2));

        console.log('\n=== ASSETS ===');
        console.log(JSON.stringify(assets, null, 2));

        setData({ components, tokens, assets });
      } catch (error) {
        console.error('Error loading design library:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <div className="p-8">Loading design library data...</div>;
  }

  if (!data) {
    return <div className="p-8">Error loading design library</div>;
  }

  const { components, tokens, assets } = data;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Design Library Contents</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Components ({components.length})</h2>
        {components.map((comp: any) => (
          <div key={comp.id} className="mb-4 p-4 bg-white rounded shadow">
            <h3 className="font-bold text-lg">{comp.name}</h3>
            <p className="text-sm text-gray-600">{comp.category}</p>
            <p className="text-sm mt-2">{comp.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Design Tokens ({tokens.length})</h2>
        <div className="space-y-2">
          {tokens.map((token: any) => (
            <div key={token.id} className="flex justify-between p-2 bg-white rounded shadow">
              <div>
                <span className="font-semibold">{token.name}</span>
                <span className="text-sm text-gray-500 ml-2">({token.category})</span>
              </div>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">{token.value}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Assets ({assets.length})</h2>
        {assets.map((asset: any) => (
          <div key={asset.id} className="mb-4 p-4 bg-white rounded shadow">
            <h3 className="font-bold">{asset.name}</h3>
            <p className="text-sm text-gray-600">{asset.type}</p>
            <p className="text-sm text-gray-500 break-all">{asset.url}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
