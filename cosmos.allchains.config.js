export default [
  {
    chainId: 'bitcanna-1',
    name: 'BitCanna',
    desc: 'BitCanna Pay Instantaneous worldwide payments, effortlessly easy and private',
    apiURL: 'https://lcd.bitcanna.io',
    rpcURL: 'https://rpc.bitcanna.io',
    coinLookup: {
      viewDenom: 'BCNA',
      chainDenom: 'ubcna',
      addressPrefix: 'bcna',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/bcna.svg`,
    },
    coingeckoId: 'bitcanna'
  },
  {
    chainId: 'juno-1',
    name: 'Juno',
    desc: '',
    apiURL: 'https://api-juno-ia.notional.ventures',
    rpcURL: 'https://rpc-juno-ia.notional.ventures',
    coinLookup: {
      viewDenom: 'JUNO',
      chainDenom: 'ujuno',
      addressPrefix: 'juno',
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg`,
    },
    coingeckoId: 'juno-network'
  },
  {
    chainId: 'omniflixhub-1',
    name: 'OmniFlix Hub',
    desc: '',
    apiURL: 'https://api.omniflix.nodestake.top',
    rpcURL: 'https://rpc.omniflix.nodestake.top',
    coinLookup: {
      viewDenom: 'FLIX',
      chainDenom: 'uflix',
      addressPrefix: 'omniflix',
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png`,
    },
    coingeckoId: 'omniflix-network'
  }, /*
  {
    chainId: 'chihuahua-1',
    name: 'Chihuahua',
    desc: 'Chihuahua is the first interoperable meme coin with a POS blockchain, making it one of the most utilized chains in the Cosmos ecosystem',
    apiURL: 'https://api.chihuahua.wtf',
    rpcURL: 'https://rpc.chihuahua.wtf',
    coinLookup: {
      viewDenom: 'HUAHUA',
      chainDenom: 'uhuahua',
      addressPrefix: 'chihuahua',
      icon: `https://avatars.githubusercontent.com/u/94940349?v=4`,
    },
    coingeckoId: 'chihuahua-token'
  }, */
  {
    chainId: 'cerberus-chain-1',
    name: 'Cerberus',
    desc: 'Cerberus the first ever three-headed meme-coin in the Cosmos ecosystem',
    apiURL: 'https://api.cerberus.zone:1317/',
    rpcURL: 'https://rpc.cerberus.zone:26657/',
    coinLookup: {
      viewDenom: 'CRBRUS',
      chainDenom: 'ucrbrus',
      addressPrefix: 'cerberus',
      icon: 'https://cerberus-chain.s3.us-east-2.amazonaws.com/transparent_logo_no_text.png',
    },
    coingeckoId: 'cerberus-2'
  }, /*
  {
    chainId: 'crescent-1',
    name: 'Crescent',
    desc: 'Innovating DeFi investment through advancements in inter-blockchain technology',
    apiURL: 'https://mainnet.crescent.network:1317',
    rpcURL: 'https://mainnet.crescent.network:26657',
    coinLookup: {
      viewDenom: 'CRE',
      chainDenom: 'ucre',
      addressPrefix: 'cre',
      icon: 'https://crescent.network/static/media/crescent_logo.c16ebd6e40d82c2ba862decaf3037a97.svg',
    },
    coingeckoId: 'crescent-network'
  },
  {
    chainId: 'teritori-testnet-v2',
    name: 'Teritori testnet ',
    apiURL: 'https://lcd-teritori.ustak.eu',
    rpcURL: 'https://rpc-teritori.ustak.eu',
    coinLookup: {
      viewDenom: 'TORI',
      chainDenom: 'utori',
      addressPrefix: 'tori',
      icon: `https://avatars.githubusercontent.com/u/108656591`,
    },
    coingeckoId: 'akash-network'
  },
  {
    chainId: 'comdex-1',
    name: 'Comdex',
    desc: 'Comdex is a decentralized synthetics protocol in the Cosmos Ecosystem.',
    apiURL: 'https://rest.comdex.one',
    rpcURL: 'https://rpc.comdex.one',
    coinLookup: {
      viewDenom: 'CMDX',
      chainDenom: 'ucmdx',
      addressPrefix: 'comdex',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/cmdx.png`,
    },
    coingeckoId: 'comdex'
  }, */
  {
    chainId: 'osmosis-1',
    name: 'Osmosis',
    desc: 'Osmosis is a decentralized peer-to-peer blockchain that people can use to create liquidity and trade IBC enabled tokens.',
    apiURL: 'https://lcd-osmosis.blockapsis.com',
    rpcURL: 'https://osmosis.validator.network',
    coinLookup: {
      viewDenom: 'OSMO',
      chainDenom: 'uosmo',
      addressPrefix: 'osmo',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/osmo.svg`,
    },
    coingeckoId: 'osmosis'
  }, /*
  {
    chainId: 'microtick-1',
    name: 'Microtick',
    desc: 'The Microtick project\'s goal is to provide a globally agreed upon, real-time consensus price.',
    apiURL: 'https://lcd-microtick.keplr.app',
    rpcURL: 'https://rpc-microtick.keplr.app',
    coinLookup: {
      viewDenom: 'TICK',
      chainDenom: 'utick',
      addressPrefix: 'micro',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/tick.svg`,
    },
    coingeckoId: 'microtick'
  },
  {
    chainId: 'iov-mainnet-ibc',
    name: 'Starname',
    desc: 'Starname is a crypto name service and the best way to claim your part of the blockchain.',
    apiURL: 'https://lcd-iov.keplr.app',
    rpcURL: 'https://rpc-iov.keplr.app',
    coinLookup: {
      viewDenom: 'IOV',
      chainDenom: 'uiov',
      addressPrefix: 'star',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/iov.svg`,
    },
    coingeckoId: 'starname'
  },
  {
    chainId: 'stargaze-1',
    name: 'Stargaze',
    desc: 'Starname is the first interoperable Layer 1 for NFTs, NFT Launchpad, NFT Marketplace. Community-owned. Zero Gas',
    apiURL: 'https://api.stargaze.pupmos.network',
    rpcURL: 'https://rpc.stargaze-apis.com',
    coinLookup: {
      viewDenom: 'STARS',
      chainDenom: 'ustars',
      addressPrefix: 'stars',
      icon: `https://raw.githubusercontent.com/public-awesome/assets/main/images/stars.png`,
    },
    coingeckoId: 'stargaze'
  },
  {
    chainId: 'bitsong-2b',
    name: 'BitSong',
    desc: 'A Blockchain Ecosystem to Empower the Music Industry. Artists, fans, distributors and labels.',
    apiURL: 'https://lcd-bitsong.itastakers.com',
    rpcURL: 'https://rpc-bitsong.itastakers.com',
    coinLookup: {
      viewDenom: 'BTSG',
      chainDenom: 'ubtsg',
      addressPrefix: 'bitsong',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/btsg.svg`,
    },
    coingeckoId: 'bitsong'
  },
  {
    chainId: 'vidulum-1',
    name: 'Vidulum',
    desc: '',
    apiURL: 'https://mainnet-lcd.vidulum.app',
    rpcURL: 'https://mainnet-rpc.vidulum.app',
    coinLookup: {
      viewDenom: 'VDL',
      chainDenom: 'uvdl',
      addressPrefix: 'vdl',
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg`,
    },
    coingeckoId: 'vidulum'
  }, */
]

