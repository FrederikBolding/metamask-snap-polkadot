# Metamask <> Polkadot snap
![](https://github.com/chainsafe/metamask-snap-polkadot/workflows/ci/badge.svg)
![](https://img.shields.io/github/issues-raw/chainsafe/metamask-snap-polkadot)
![](https://img.shields.io/github/license/chainsafe/metamask-snap-polkadot)
![](https://img.shields.io/badge/yarn-%3E%3D1.17.0-orange.svg?style=flat-square)
![](https://img.shields.io/badge/Node.js-%3E%3D12.x-orange.svg?style=flat-square)
![Discord](https://img.shields.io/discord/608204864593461248?color=blue&label=Discord&logo=discord)

Metamask snap (plugin) to enable Metamask users interaction with Polkadot dapps.

### Requirements

- [nvm](https://github.com/nvm-sh/nvm)
- [Metamask Flask](https://metamask.io/flask/) Download and add this as an extension to your chrome browser

### Building

- Clone [this](https://github.com/BSS-Metamask/metamask-snap-polkadot) repository
  ```
  git clone https://github.com/BSS-Metamask/metamask-snap-polkadot
  ```
- Switch to branch `fb/port-to-latest`
  ```
  cd metamask-snap-polkadot
  git checkout fb/port-to-latest
  ```
- This project requires node version `>v14.0.0`
  ```
  nvm install v14.4.0
  nvm use v14.0.0
  ```
- Install `yarn`
  ```
  npm install -g yarn
  ```
- Install Project Dependencies using `yarn`
  ```
  yarn install
  ```
- Build Project
  ```
  yarn build
  ```

### Testing

- Setup your wallet in Metamask Flask

- Start the snap
  ```
  yarn run start:snap
  ```

- Using the Dapp
  - Open Chrome
  - Goto URL `localhost:8081`
  - In the webpage displayed, click on `Connect polkadot snap`
  - Click `Connect` in the Metamask popup to accept permission requested by the snap

### Contributing

- If you modify any snap source file (*.ts) , you must update the `Base64` encoded `SHA256` hash of the
  `metamask-snap-polkadot/packages/snap/dist/bundle.js` file in `metamask-snap-polkadot/packages/snap/snap.manifest.json` before pushing your commit
  