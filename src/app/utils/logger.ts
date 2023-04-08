const isDev = process.env.NODE_ENV === 'development';

const logger = {
  log: (...args: any) => {
    if (isDev) {
      console.log(...args);
    }
  },
  warn: (...args: any) => {
    if (isDev) {
      console.warn(...args);
    }
  },
  error: (...args: any) => {
    if (isDev) {
      console.error(...args);
    }
  },
};

export default logger;