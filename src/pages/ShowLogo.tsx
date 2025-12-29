import { useEffect, useState } from 'react';
import { DesignLibrary } from '../lib/designLibrary';

const DESIGN_SYSTEM_ID = '00000000-0000-0000-0000-000000000001';

export default function ShowLogo() {
  const [logo, setLogo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLogo() {
      try {
        const assets = await DesignLibrary.getAssets(DESIGN_SYSTEM_ID);
        console.log('All assets:', assets);

        const logoAsset = assets.find((asset: any) =>
          asset.name.toLowerCase().includes('logo') ||
          asset.type === 'logo'
        );

        console.log('Logo found:', logoAsset);
        setLogo(logoAsset);
      } catch (error) {
        console.error('Error loading logo:', error);
      } finally {
        setLoading(false);
      }
    }

    loadLogo();
  }, []);

  if (loading) {
    return <div className="p-8">Loading logo...</div>;
  }

  if (!logo) {
    return <div className="p-8">No logo found in design library</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Logo from Design Library</h1>

      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-xl font-bold mb-4">{logo.name}</h2>
        <p className="text-sm text-gray-600 mb-4">Type: {logo.type}</p>

        <div className="mb-4">
          <img
            src={logo.url}
            alt={logo.name}
            className="max-w-md"
          />
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded">
          <p className="text-sm font-mono break-all">{logo.url}</p>
        </div>
      </div>
    </div>
  );
}
