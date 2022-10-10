/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { translate } from "@docusaurus/Translate";
import { sortBy } from "@site/src/utils/jsUtils";

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a production-ready site with real content and decent customizations
 * (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 * - It has a stable domain (a Netlify/Vercel deploy preview is not allowed)
 *
 * Instructions:
 * - Add your site in the json array below
 * - `title` is your project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of your project
 * - Use relevant tags to categorize your site (read the tag descriptions below)
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If your website is open-source, add your source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/3976
 *
 * If you edit this file through the GitHub interface, you can:
 * - Submit first your users.tsx edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update sites with wrong data
 * - Ensure site tags remain correct over time
 * - Remove sites not using Docusaurus anymore
 * - Add missing Docusaurus sites (if the site owner agreed)
 */

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | "popular"
  | "apps"
  | "impact"
  | "defi"
  | "earn"
  | "wallets";

export type User = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export const Tags: { [type in TagType]: Tag } = {
  // DO NOT USE THIS TAG: we choose sites to add to appss
  popular: {
    label: translate({ message: "Popular" }),
    description: translate({
      message: "Popular Celo dApps for you to check out!",
      id: "showcase.tag.popular.description",
    }),
    color: "#e9669e",
  },

  // For open-source sites, a link to the source code is required
  // The source should be your *website's* source, not your project's source!
  apps: {
    label: translate({ message: "Apps" }),
    description: translate({
      message: "",
      id: "showcase.tag.apps.description",
    }),
    color: "#39ca30",
  },

  impact: {
    label: translate({ message: "Impact" }),
    description: translate({
      message: "",
      id: "showcase.tag.impact.description",
    }),
    color: "#dfd545",
  },

  defi: {
    label: translate({ message: "DeFi" }),
    description: translate({
      message: "",
      id: "showcase.tag.defi.description",
    }),
    color: "#a44fb7",
  },

  earn: {
    label: translate({ message: "Earn" }),
    description: translate({
      message: "",
      id: "showcase.tag.earn.description",
    }),
    color: "#127f82",
  },

  wallets: {
    label: translate({ message: "Wallets" }),
    description: translate({
      message: "",
      id: "showcase.tag.wallets.description",
    }),
    color: "#fe6829",
  },
};

// Add your site to this list
// prettier-ignore
const Users: User[] = [
  {
    title: 'C# mobile App to display Celo NFTs',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Flutter & Celo - Easily build Flutter Mobile dApps',
    description: 'Celo Composer now supports Flutter. Quickly develop mobile apps on Celo.',
    preview: require('./showcase/flutter-and-celo-easily-build-flutter-mobile-dapps.png'),
    website: 'https://medium.com/celodevelopers/flutter-celo-easily-build-flutter-mobile-dapps-6f1bab7dee65',
    source: 'https://medium.com/celodevelopers/flutter-celo-easily-build-flutter-mobile-dapps-6f1bab7dee65',
    tags: ['apps'],
  },
  {
    title: 'Composer Series - Build a Crowdfunding ReFi dApp with Celo Composer',
    description: 'How to quickly create and deploy a full-stack crowdfunding dApp on Celo.',
    preview: require('./showcase/composer-series-build-a-crowdfunding-refi-dapp-with-celo-composer.png'),
    website: 'https://medium.com/celodevelopers/composer-series-build-a-crowdfunding-refi-dapp-with-celo-composer-d1a169f8a78d',
    source: 'https://medium.com/celodevelopers/composer-series-build-a-crowdfunding-refi-dapp-with-celo-composer-d1a169f8a78d',
    tags: ['apps'],
  },
  {
    title: 'React Native & Celo - Easily build React Native dApps on Celo',
    description: 'Quickly develop Android and iOS apps on Celo using the Celo Composer for React Native.',
    preview: require('./showcase/react-native-and-celo-easily-build-react-native-dapps-on-celo.png'),
    website: 'https://medium.com/celodevelopers/celo-composer-react-native-easily-build-react-native-dapps-on-celo-bdc57080772f',
    source: 'https://medium.com/celodevelopers/celo-composer-react-native-easily-build-react-native-dapps-on-celo-bdc57080772f',
    tags: ['apps'],
  },
  {
    title: 'How to quickly build an NFT collection on Celo',
    description: 'Create a low-code NFT collection with Celo, IPFS, Pinata, and Remix.',
    preview: require('./showcase/how-to-quickly-build-an-nft-collection-on-celo.png'),
    website: 'https://medium.com/celodevelopers/how-to-quickly-build-an-nft-collection-on-celo-c79dd276b442',
    source: 'https://medium.com/celodevelopers/how-to-quickly-build-an-nft-collection-on-celo-c79dd276b442',
    tags: ['apps'],
  },
  {
    title: 'Introduction to creating NFTs on Celo',
    description: 'This tutorial will walk through the basic steps required to create an NFT collection (of ERC-721 tokens) on Celo. ',
    preview: require('./showcase/celo.png'),
    website: 'https://medium.com/celodevelopers/introduction-to-creating-nfts-on-celo-eb7240a71cc0',
    source: 'https://medium.com/celodevelopers/introduction-to-creating-nfts-on-celo-eb7240a71cc0',
    tags: ['apps'],
  },
  {
    title: 'Building for the Celo Connect Mobile Hackathon',
    description: 'Resources to help you build your mobile-first Celo dApp.',
    preview: require('./showcase/building-for-the-celo-connect-mobile-hackathon.png'),
    website: 'https://medium.com/celodevelopers/building-for-the-celo-connect-mobile-hackathon-a78707b7431c',
    source: 'https://medium.com/celodevelopers/building-for-the-celo-connect-mobile-hackathon-a78707b7431c',
    tags: ['apps'],
  },
  {
    title: 'Celo Composer - Extend and Customize your Full-Stack Mobile dApps',
    description: 'Step-by-step guide to create a new custom dApp using the Celo Composer.',
    preview: require('./showcase/celo-composer-extend-and-customize-your-full-stack-modile-dapps.png'),
    website: 'https://medium.com/celodevelopers/celo-dappstarter-customize-your-full-stack-mobile-dapps-on-celo-232d85b7a2c5',
    source: 'https://medium.com/celodevelopers/celo-dappstarter-customize-your-full-stack-mobile-dapps-on-celo-232d85b7a2c5',
    tags: ['apps'],
  },
  {
    title: 'ContractKit - A Practical Guide to Interacting with the Celo Core Contracts',
    description: 'How to access the Celo Blockchain with JavaScript using ContractKit.',
    preview: require('./showcase/contractkit-a-practical-guide-to-interacting-with-the-celo-core-contracts.png'),
    website: 'https://medium.com/celodevelopers/contractkit-a-practical-guide-to-interacting-with-the-celo-core-contracts-ea49541975c',
    source: 'https://medium.com/celodevelopers/contractkit-a-practical-guide-to-interacting-with-the-celo-core-contracts-ea49541975c',
    tags: ['apps'],
  },
  {
    title: '3 Simple Steps to Get Started with Valora on Celo',
    description: 'Send, pay, and spend cryptocurrency like everyday money — all from the palm of your hand.',
    preview: require('./showcase/3-simple-steps-to-get-started-with-valora-on-celo.png'),
    website: 'https://medium.com/celodevelopers/4-simple-steps-to-get-started-with-valora-on-celo-58f92f801d89',
    source: 'https://medium.com/celodevelopers/4-simple-steps-to-get-started-with-valora-on-celo-58f92f801d89',
    tags: ['apps'],
  },
  {
    title: 'Plumo - An Ultralight Blockchain Client on Celo',
    description: 'How the Celo light client became 1.7 million times lighter than Ethereum.',
    preview: require('./showcase/plumo-an-ultralight-blockchain-client-on-celo.png'),
    website: 'https://medium.com/celodevelopers/plumo-an-ultralight-blockchain-client-on-celo-471577cbaef1',
    source: 'https://medium.com/celodevelopers/plumo-an-ultralight-blockchain-client-on-celo-471577cbaef1',
    tags: ['apps'],
  },
  {
    title: 'A Boilerplate guide to Airdropping on Celo',
    description: 'Deploy an Airdrop contract to Celo and claim ERC20 tokens using the web3 SDK.',
    preview: require('./showcase/a-boilerplate-guide-to-airdropping-on-celo.png'),
    website: 'https://medium.com/celodevelopers/a-boilerplate-guide-to-airdropping-on-celo-ea7905754ff',
    source: 'https://medium.com/celodevelopers/a-boilerplate-guide-to-airdropping-on-celo-ea7905754ff',
    tags: ['apps'],
  },
  {
    title: 'Getting started with DAOs on Celo',
    description: 'Introduction to DAOs and the advantages of building a DAO on Celo.',
    preview: require('./showcase/getting-started-with-daos-on-celo.png'),
    website: 'https://medium.com/celodevelopers/getting-started-with-daos-on-celo-a6c6761024a',
    source: 'https://medium.com/celodevelopers/getting-started-with-daos-on-celo-a6c6761024a',
    tags: ['apps'],
  },
  {
    title: 'Hardhat and Celo | The Ultimate Guide to Deploy Celo dApps using Hardhat',
    description: 'How to deploy a smart contract to Celo testnet, mainnet, or a local network using Hardhat.',
    preview: require('./showcase/hardhat-and-celo-the-ultimate-guide-to-deploy-celo-dapps-using-hardhat.png'),
    website: 'https://medium.com/celodevelopers/hardhat-and-celo-the-ultimate-guide-to-deploy-celo-dapps-using-hardhat-747f42ad0788',
    source: 'https://medium.com/celodevelopers/hardhat-and-celo-the-ultimate-guide-to-deploy-celo-dapps-using-hardhat-747f42ad0788',
    tags: ['apps'],
  },
  {
    title: 'Truffle and Celo | The Ultimate Guide to Deploy Celo dApps with Truffle',
    description: 'How to deploy a smart contract to Celo testnet, mainnet, or a local blockchain using Truffle.',
    preview: require('./showcase/truffle-and-celo-the-ultimate-guide-to-deploy-celo-dapps-using-truffle.png'),
    website: 'https://medium.com/celodevelopers/the-ultimate-guide-to-deploy-on-celo-with-truffle-65f862bae077',
    source: 'https://medium.com/celodevelopers/the-ultimate-guide-to-deploy-on-celo-with-truffle-65f862bae077',
    tags: ['apps'],
  },
  {
    title: '6 Steps to Quickly Build Smart Contracts on Celo with Remix',
    description: 'How to create, deploy and interact with smart contracts on Celo testnet or mainnet using Remix.',
    preview: require('./showcase/6-steps-to-quickly-build-smart-contracts-on-celo-with-remix.png'),
    website: 'https://medium.com/celodevelopers/6-steps-to-quickly-build-smart-contracts-on-celo-with-remix-a0d1f0a33ef3',
    source: 'https://medium.com/celodevelopers/6-steps-to-quickly-build-smart-contracts-on-celo-with-remix-a0d1f0a33ef3',
    tags: ['apps'],
  },
  {
    title: '3 Simple Steps to Connect your MetaMask Wallet To Celo',
    description: 'A step-by-step tutorial to add the Celo network to your MetaMask wallet.',
    preview: require('./showcase/3-simple-steps-to-connect-your-metamask-wallet-to-celo.png'),
    website: 'https://medium.com/celodevelopers/3-simple-steps-to-connect-your-metamask-wallet-to-celo-732d4a139587',
    source: 'https://medium.com/celodevelopers/3-simple-steps-to-connect-your-metamask-wallet-to-celo-732d4a139587',
    tags: ['apps'],
  },
  {
    title: 'Celo CLI - A Practical Guide to Energize your Celo Toolkit',
    description: 'Explore the Celo blockchain using a command-line interface.',
    preview: require('./showcase/celo-cli-a-practical-guide-to-energize-your-celo-toolkit.png'),
    website: 'https://medium.com/celodevelopers/celo-cli-a-practical-guide-to-energize-your-celo-toolkit-9253067fff3a',
    source: 'https://medium.com/celodevelopers/celo-cli-a-practical-guide-to-energize-your-celo-toolkit-9253067fff3a',
    tags: ['apps'],
  },
  {
    title: 'Celo Composer - Easily Build Full-Stack Mobile dApps on Celo',
    description: 'Quickly develop full-stack progressive web applications on Celo with the Celo Composer.',
    preview: require('./showcase/celo-composer-easily-build-full-stack-modile-dapps-on-celo.png'),
    website: 'https://medium.com/celodevelopers/build-celo-dapps-in-15-minutes-or-less-438ea954d0b1',
    source: 'https://medium.com/celodevelopers/build-celo-dapps-in-15-minutes-or-less-438ea954d0b1',
    tags: ['apps'],
  },
  {
    title: '17 Smart Contracts Powering the Celo Protocol',
    description: 'Making sense of the logic driving the Celo platform.',
    preview: require('./showcase/17-smart-contracts-powering-the-celo-protocol.png'),
    website: 'https://medium.com/celodevelopers/17-powerful-celo-protocol-core-contracts-you-need-to-know-d84c1fbc5a6',
    source: 'https://medium.com/celodevelopers/17-powerful-celo-protocol-core-contracts-you-need-to-know-d84c1fbc5a6',
    tags: ['apps'],
  },
  {
    title: 'Introduction to Celo Composer',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Celo Spotlight - Building a Financial System that Creates the Conditions for Prosperity — for Everyone.',
    description: 'Everything you need to get started with Celo.',
    preview: require('./showcase/celo-spotlight.png'),
    website: 'https://medium.com/celodevelopers/celo-spotlight-build-a-financial-system-that-creates-the-conditions-for-prosperity-for-everyone-7b1830efc254',
    source: 'https://medium.com/celodevelopers/celo-spotlight-build-a-financial-system-that-creates-the-conditions-for-prosperity-for-everyone-7b1830efc254',
    tags: ['apps'],
  },
  {
    title: 'Celo Valora + WalletConnect v1',
    description: 'How to use WalletConnect version 1 in a DApp to connect to Valora.',
    preview: require('./showcase/celo.png'),
    website: 'https://medium.com/celodevelopers/celo-valora-walletconnect-v1-7fc105455779',
    source: 'https://medium.com/celodevelopers/celo-valora-walletconnect-v1-7fc105455779',
    tags: ['apps'],
  },
  {
    title: 'Use onchain randomness',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'React based DApp',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Deploy an NFT to Celo',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Deploy & Mint a Token',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Deploy and Interact with Contracts (Remotely)',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Deploy a Contract on Celo (local node)',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Sending CELO & Stable Assets',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Using Keystores Library for Local Key Management',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Add Your ERC20 Token to Your Celo Wallet',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Verifying Contracts with Hardhat',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Demos with ObservableHQ',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Using the Graph with Celo',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Code Playground -- Metamask',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Intro to the Code Playground',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Submit a Tutorial',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Celo Development 201 - Build an NFT Minter with Hardhat and React',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Celo Development 101',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'How to mint your own fungible token on Celo',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Deploying smart contracts on Celo with Truffle',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'How to successfully connect to a Celo Wallet with a React Native DApp',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'How to customize an Ethereum smart contract for the Celo network',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Deploy and Interact with Contracts (Remotely)',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'How to use Moola’s money market',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Testing Celo Smart Contracts with Truffle',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Distributed File Manager (DFM) using Celo, IPFS and ReactJS',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Introduction to dApp kit',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Build a Decentralized Autonomous Organization (DAO) on Celo',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'How to re-deploy your Ethereum DApp to Celo',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Create Vault Smart Contract',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Send CELO & cUSD',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Create subgraphs for Celo smart contracts',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Hello Mobile DApp',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Deploy Celo Smart contracts with Remix IDE',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'How to create a ERC1155 NFT in Celo Network with Hardhat',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'Celo Crowd Funding Project Tutorial',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: 'How to create a Loyalty Program using Meta-transactions',
    description: 'What if users could get rewarded for transactions and not pay gas? This tutorial will show you how!',
    preview: require('./showcase/creating-loyalty-programs-using-meta-transactions.png'),
    website: 'https://medium.com/celodevelopers/how-to-create-a-loyalty-program-using-meta-transactions-686ae036b976',
    source: 'https://medium.com/celodevelopers/how-to-create-a-loyalty-program-using-meta-transactions-686ae036b976',
    tags: ['apps'],
  },
  {
    title: 'Composer series: Building a decentralized news feed with Celo Composer',
    description: 'Build a decentralized news feed using React, Tailwind, IPFS, and Celo Composer.',
    preview: require('./showcase/composer-series-building-a-decentralized-newsfeed-with-celo-composer.png'),
    website: 'https://medium.com/celodevelopers/composer-series-building-a-decentralized-news-feed-with-celo-composer-a85b25027609',
    source: 'https://medium.com/celodevelopers/composer-series-building-a-decentralized-news-feed-with-celo-composer-a85b25027609',
    tags: ['apps'],
  },
  {
    title: 'How to create an upgradeable smart contract in Celo',
    description: 'Everything you need to know about upgradable smart contracts.',
    preview: require('./showcase/how-to-create-an-upgradable-smart-contract-in-celo.png'),
    website: 'https://medium.com/celodevelopers/how-to-create-an-upgradeable-smart-contract-in-celo-52ae4fa8681d',
    source: 'https://medium.com/celodevelopers/how-to-create-an-upgradeable-smart-contract-in-celo-52ae4fa8681d',
    tags: ['apps'],
  },
  {
    title: 'Bridging tokens to and from Celo via Wormhole',
    description: 'Wormhole has enabled the Celo chain.',
    preview: require('./showcase/bridging-tokens-to-and-from-celo-via-wormhole.png'),
    website: 'https://medium.com/celodevelopers/bridging-token-to-and-from-celo-via-wormhole-83cae48dfcff',
    source: 'https://medium.com/celodevelopers/bridging-token-to-and-from-celo-via-wormhole-83cae48dfcff',
    tags: ['apps'],
  },
  {
    title: 'Bridging tokens to and from Celo via Wormhole',
    description: 'Tutorial description goes here',
    preview: require('./showcase/celo.png'),
    website: 'https://valoraapp.com/',
    source: 'https://github.com/valora-inc',
    tags: ['apps'],
  },
  {
    title: '9 Sustainable DeFi Projects Built on Celo',
    description: 'Creating the world’s first carbon-neutral blockchain was just the beginning.',
    preview: require('./showcase/9-sustainable-defi-projects-built-on-celo.png'),
    website: 'https://medium.com/celodevelopers/9-sustainable-defi-projects-built-on-celo-606a265f88e5',
    source: 'https://medium.com/celodevelopers/9-sustainable-defi-projects-built-on-celo-606a265f88e5',
    tags: ['apps'],
  },
  
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by apps tag, appss first
  result = sortBy(result, (user) => !user.tags.includes("apps"));
  return result;
}

export const sortedUsers = sortUsers();