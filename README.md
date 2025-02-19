# FractionAI-BOT - Fraction AI Battle Bot

A bot for automating battles in Fraction AI game.

## Features

- Auto Match Making with Multiple Captcha Solvers
  - AntiCaptcha
  - 2Captcha
  - Gemini AI
- Auto Cooldown Management
- Multiple Wallet Support
- Rate Limit Handling
- Clean UI Dashboard
- Easy to Configure

## Requirements

- Node.js v18+
- npm or yarn
- Ethereum Wallet with Sepolia ETH
- One of these Captcha solvers:
  - Anti-Captcha API Key
  - 2Captcha API Key
  - Gemini API Key

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
  "twoCaptchaKey": "your_2captcha_api_key",
  "geminiApiKey": "your_gemini_api_key",
  "defaultSolver": "twocaptcha",
  "pollingInterval": 10,
  "retryDelay": 10000,
  "maxRetries": 3
}
```

Notes:

- Available entry fees: `0.01`, `0.001`, `0.0001` ETH
- Available solvers: `anticaptcha`, `twocaptcha`, `gemini`
- At least one solver API key must be provided
- Polling interval only used for 2Captcha solver

## Required Services

### Choose Your Captcha Solver

#### Option 1: 2Captcha (Recommended)

1. Register at [2Captcha](https://2captcha.com)
2. Get your API key
3. Add the API key as `twoCaptchaKey` in `config.json`
4. Set `defaultSolver` to `"twocaptcha"`
5. Optionally adjust `pollingInterval` (default: 10 seconds)

#### Option 2: Anti-Captcha

1. Register at [Anti-Captcha](https://anti-captcha.com)
2. Get your API key
3. Add the API key as `antiCaptchaKey` in `config.json`
4. Set `defaultSolver` to `"anticaptcha"`

#### Option 3: Gemini AI

1. Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add the API key as `geminiApiKey` in `config.json`
3. Set `defaultSolver` to `"gemini"`

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
4. Choose and set up your preferred captcha solver
5. Configure your settings in `config.json`

## Features Detail

### Auto Match Making

- Automatically starts matches for your agents
- Multiple captcha solver options
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

### Captcha System

- Modular solver system
- Easy to switch between solvers
- Auto retry on failed solves
- Performance reporting (2Captcha only)
- Configurable polling interval

## Warning

- Use at your own risk
- Only use test wallet, never use your main wallet
- Make sure you understand what you're doing
- Keep your API keys secure

## Links

- Github: https://github.com/WINGFO-HQ
- Telegram: https://t.me/infomindao

## License

MIT License
