export default [
  {
    chainId: 'bitcanna-1',
    name: 'BitCanna',
    slug: 'bitcanna',
    mode: 'mainnet',
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
    slug: 'juno',
    mode: 'mainnet',
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
    slug: 'omniflix',
    desc: '',
    mode: 'mainnet',
    apiURL: 'https://api.omniflix.nodestake.top',
    rpcURL: 'https://rpc.omniflix.nodestake.top',
    coinLookup: {
      viewDenom: 'FLIX',
      chainDenom: 'uflix',
      addressPrefix: 'omniflix',
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png`,
    },
    coingeckoId: 'omniflix-network'
  },
  {
    chainId: 'cerberus-chain-1',
    name: 'Cerberus',
    slug: 'cerberus',
    mode: 'mainnet',
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
  },
  {
    chainId: 'osmosis-1',
    name: 'Osmosis',
    slug: 'osmosis',
    mode: 'mainnet',
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
  },
  {
    chainId: 'innuendo-1',
    name: 'Quicksilver',
    slug: 'quicksilver',
    mode: 'testnet',
    desc: 'Quicksilver is the cosmos liquid staking zone.',
    apiURL: 'http://144.91.127.5:1318',
    rpcURL: 'http://144.91.127.5:36657',
    coinLookup: {
      viewDenom: 'QUICK',
      chainDenom: 'uqck',
      addressPrefix: 'quick',
      icon: `https://allocations.quicksilver.zone/static/media/quicksilver-logo.688620c7.png`,
    },
    coingeckoId: 'quicksilver'
  },
  {
    chainId: 'likecoin-mainnet-2',
    name: 'Likecoin',
    slug: 'likecoin',
    mode: 'mainnet',
    desc: '',
    apiURL: 'https://mainnet-node.like.co',
    rpcURL: 'https://mainnet-node.like.co/rpc/',
    coinLookup: {
      viewDenom: 'LIKE',
      chainDenom: 'nanolike',
      addressPrefix: 'like',
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png`,
    },
    coingeckoId: 'likecoin'
  },
  {
    chainId: 'iov-mainnet-ibc',
    name: 'Starname',
    slug: 'starname',
    mode: 'mainnet',
    desc: '',
    apiURL: 'https://lcd-iov.keplr.app',
    rpcURL: 'https://rpc-iov.keplr.app',
    coinLookup: {
      viewDenom: 'IOV',
      chainDenom: 'uiov',
      addressPrefix: 'star',
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png`,
    },
    coingeckoId: 'starname'
  },

  {
    chainId: 'chihuahua-1',
    name: 'Chihuahua',
    slug: 'chihuahua',
    mode: 'mainnet',
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
  },
  {
    chainId: 'akashnet-2',
    name: 'Akash',
    slug: 'akash',
    mode: 'mainnet',
    desc: '',
    apiURL: 'https://api-akash-ia.cosmosia.notional.ventures',
    rpcURL: 'https://rpc-akash-ia.cosmosia.notional.ventures:443',
    coinLookup: {
      viewDenom: 'AKT',
      chainDenom: 'uakt',
      addressPrefix: 'akash',
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png`,
    },
    coingeckoId: 'akash-network'
  },
  {
    chainId: 'bitsong-2b',
    name: 'BitSong',
    slug: 'bitsong',
    mode: 'mainnet',
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
    chainId: 'sentinelhub-2',
    name: 'Sentinel',
    slug: 'sentinel',
    mode: 'mainnet',
    desc: 'The Blockchain Bandwidth Infrastructure · Sentinel is a network of independent dVPN applications.',
    apiURL: 'https://lcd-sentinel.keplr.app',
    rpcURL: 'https://rpc-sentinel.keplr.app',
    coinLookup: {
      viewDenom: 'DVPN',
      chainDenom: 'udvpn',
      addressPrefix: 'sent',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/dvpn.png`,
    },
    coingeckoId: 'sentinel'
  },
  {
    chainId: 'dig-1',
    name: 'Dig Chain',
    slug: 'dig',
    mode: 'mainnet',
    apiURL: 'https://api-1-dig.notional.ventures',
    rpcURL: 'https://rpc-1-dig.notional.ventures',
    coinLookup: {
      viewDenom: 'DIG',
      chainDenom: 'udig',
      addressPrefix: 'dig',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/dig.png`,
    },
    coingeckoId: 'dig-chain'
  },
  {
    chainId: 'kichain-2',
    name: 'Kichain',
    slug: 'kichain',
    mode: 'mainnet',
    apiURL: 'https://api-mainnet.blockchain.ki',
    rpcURL: 'https://rpc-mainnet.blockchain.ki',
    coinLookup: {
      viewDenom: 'XKI',
      chainDenom: 'uxki',
      addressPrefix: 'ki',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/xki.svg`,
    },
    coingeckoId: 'ki'
  },
  {
    chainId: 'comdex-1',
    name: 'Comdex',
    slug: 'comdex',
    mode: 'mainnet',
    apiURL: 'https://rest.comdex.one',
    rpcURL: 'https://rpc.comdex.one',
    coinLookup: {
      viewDenom: 'CMDX',
      chainDenom: 'ucmdx',
      addressPrefix: 'comdex',
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png`,
    },
    coingeckoId: 'comdex'
  },
  {
    chainId: 'kaiyo-1',
    name: 'Kujira',
    slug: 'kujira',
    mode: 'mainnet',
    desc: 'The Cosmos Layer 1 platform for community selected projects creating true value.',
    apiURL: 'https://lcd-kujira.whispernode.com',
    rpcURL: 'https://rpc-kujira.whispernode.com',
    coinLookup: {
      viewDenom: 'KUJI',
      chainDenom: 'ukuji',
      addressPrefix: 'kujira',
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
    },
    coingeckoId: 'kujira'
  },  
]

