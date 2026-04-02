import React, { ReactNode } from 'react';
import { Platform } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconParams {
  materialName: string;
  sfName: string;
  color: string;
  size: number;
}

export const getTabIcon = ({ materialName, sfName, color, size }: IconParams): ReactNode => {
  if (Platform.OS === 'ios') {
    // We cast to 'any' internally here once to satisfy the library's
    // weird dual-type requirement, but the FUNCTION returns a clean ReactNode.
    // This keeps the "any" out of your business logic/navigators.
    return {
      type: 'sfSymbol',
      name: sfName,
    } as unknown as ReactNode;
  }

  return <MaterialIcon name={materialName} size={size} color={color} />;
};
