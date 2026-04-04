export class Logger {
  static info(message, meta = {}) {
    console.log(JSON.stringify({ level: 'INFO', message, ...meta, ts: new Date().toISOString() }));
  }

  static error(message, meta = {}) {
    console.error(JSON.stringify({ level: 'ERROR', message, ...meta, ts: new Date().toISOString() }));
  }
}
