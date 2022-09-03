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
]

