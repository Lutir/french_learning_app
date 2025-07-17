import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

export interface NetworkStatus {
  isConnected: boolean;
  isInternetReachable: boolean | null;
  type: string | null;
}

export const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus>({
    isConnected: true,
    isInternetReachable: true,
    type: null,
  });

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setNetworkStatus({
        isConnected: state.isConnected ?? true,
        isInternetReachable: state.isInternetReachable,
        type: state.type,
      });
    });

    return () => unsubscribe();
  }, []);

  return networkStatus;
}; 