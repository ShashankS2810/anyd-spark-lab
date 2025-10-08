import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [72.9147, 19.1334], // IIT Bombay coordinates
      zoom: 15,
    });

    // Add marker for IIT Bombay
    new mapboxgl.Marker({ color: '#FF7A00' })
      .setLngLat([72.9147, 19.1334])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          '<h3 style="font-weight: bold;">AnyD Materials</h3><p>IIT Bombay Campus, Powai, Mumbai</p>'
        )
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    setIsMapLoaded(true);
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapLoaded) {
    return (
      <div className="space-y-4 p-6 bg-background rounded-lg border">
        <div>
          <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
          <p className="text-sm text-muted-foreground mb-2">
            Get your token from{' '}
            <a
              href="https://mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <Input
            id="mapbox-token"
            type="text"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            placeholder="pk.eyJ1..."
          />
        </div>
        <Button onClick={initializeMap} disabled={!mapboxToken} className="w-full">
          Load Map
        </Button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
    </div>
  );
};

export default Map;
