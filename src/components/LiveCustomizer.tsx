import React from 'react';

interface LiveCustomizerProps {
  name: string;
  onChangeName: (newName: string) => void;
}

export const LiveCustomizer: React.FC<LiveCustomizerProps> = ({ name, onChangeName }) => {
  return (
    <div style={{ display: 'none' }}>
      <input
        type="text"
        value={name}
        onChange={(e) => onChangeName(e.target.value)}
        placeholder="FAHAD"
      />
    </div>
  );
};
