module.exports = {
  apps : [
  {
    name: 'FDP_front',
    script: 'npm',
    args: 'run start:production',
    env_production: {
      NODE_ENV: 'production'
    }
  },
  ],

  deploy : {
    production : {},
    staging: {
      user : 'airkorea',
      host : '34.80.43.108',
      ref  : 'origin/master',
      repo : 'https://github.com/youspend8/FDP_front.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {}
  }
};
