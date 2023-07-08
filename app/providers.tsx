'use client';

import * as React from 'react';
import {
    RainbowKitProvider,
    getDefaultWallets,
    connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
    argentWallet,
    trustWallet,
    ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    zora,
    goerli,
    optimismGoerli,
} from 'wagmi/chains';
import { SafeConnector } from '@wagmi/connectors/safe';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
        mainnet,
        optimism,
        arbitrum,
        goerli,
        optimismGoerli,
    ],
    [
        alchemyProvider({ apiKey: `${process.env.NEXT_PUBLIC_ALCHEMY_KEY as string}`})
    ]
);

const projectId = '85bd0f76fd373eb1d718f39e94c62473';

const { wallets } = getDefaultWallets({
    appName: 'Quantum Fair',
    projectId,
    chains,
});

const demoAppInfo = {
    appName: 'Quantum Fair',
};

const connectors = connectorsForWallets([
    ...wallets,
    {
        groupName: 'Other',
        wallets: [
            argentWallet({ projectId, chains }),
            trustWallet({ projectId, chains }),
            ledgerWallet({ projectId, chains }),
        ],
    },
]);

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
                {mounted && children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
}
