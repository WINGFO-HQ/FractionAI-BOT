# FractionAI-BOT - Fraction AI Battle Bot

A bot for automating battles in Fraction AI game.

## Features

- Auto Match Making with Captcha Solver
- Auto Cooldown Management
- Multiple Wallet Support
- Rate Limit Handling
- Clean UI Dashboard
- Easy to Configure

## Requirements

- Node.js v18+
- npm or yarn
- Ethereum Wallet with Sepolia ETH
- Anti-Captcha API Key

## Installation

1. Clone this repository

```bash
git https://github.com/WINGFO-HQ/FractionAI-BOT.git
cd FractionAI-BOT
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Edit `data.txt` file and input your private keys (one per line)

```
your_private_key
```

4. Edit `config.json` file

```json
{
  "fee": 0.01,
  "antiCaptchaKey": "your_anti_captcha_key",
  "retryDelay": 10000,
  "maxRetries": 3
}
```

Available entry fees: `0.01`, `0.001`, `0.0001` ETH

## Required Services

### Anti-Captcha

1. Register at [Anti-Captcha](https://anti-captcha.com)
2. Get your API key
3. Add the API key to `config.json`

## Usage

1. Run the bot

```bash
npm start
# or
yarn start
```

2. Controls

- Press `Q` to quit
- Press `R` to refresh display
- Press `C` to clear logs

## Before Running

1. Register at [Fraction AI](https://dapp.fractionai.xyz/?referral=A948848C)
2. Create your agent
3. Make sure you have enough Sepolia ETH
4. Get Anti-Captcha API key
5. Configure your settings in `config.json`

## Features Detail

### Auto Match Making

- Automatically starts matches for your agents
- Handles session limits (6 sessions per hour)
- 60 minutes cooldown management
- Auto retries with invalid captcha

### Rate Limit Handling

- Automatic cooldown when rate limit hit
- Exponential backoff for retries
- Clear error messages and status

### Dashboard

- Wallet status and balance
- Agent status and performance
- Fractal info and progress
- Activity logs

## Warning

- Use at your own risk
- Only use test wallet, never use your main wallet
- Make sure you understand what you're doing
- Keep your Anti-Captcha API key secure

## Links

- Github: https://github.com/WINGFO-HQ
- Telegram: https://t.me/infomindao

## License

MIT License
