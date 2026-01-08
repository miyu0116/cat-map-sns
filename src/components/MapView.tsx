import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import type { CatPost } from '../types/CatPost'
import 'leaflet/dist/leaflet.css';

/**
 * MapViewコンポーネント
 *
 * 役割:
 * - 地図表示
 * - CatPost[] をピンで表示
 * - ピン押下時に親コンポーネントへ通知
 *
 * 注意:
 * - stateを持たない（純粋に表示専用）
 * - データの保存や更新は親に任せる
 */


type MapViewProps = {
  posts: CatPost[]
}

const MapView = ({ posts }: MapViewProps) => {
  const position: [number, number] = [35.6895, 139.6917]; // 東京の緯度経度

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100vw' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
      />
      {posts.map((post) => (
        <Marker
          key={post.id}
          position={[post.lat, post.lng]}
        >
          <Popup>{post.comment}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
